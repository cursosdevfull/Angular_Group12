import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthApplication } from '../../modules/auth/application/auth.application';
import { StorageApplication } from '../../modules/auth/application/storage.application';

@Directive({
  selector: '[rolesAllowed]',
})
export class RolesAllowedDirective {
  @Input('rolesAllowed') roles: string = '';
  listRolesAllowed: string[] = [];

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainer: ViewContainerRef,
    private readonly authApplication: AuthApplication,
    private readonly storageApplication: StorageApplication
  ) {}

  ngOnInit() {
    this.listRolesAllowed = this.roles.split(','); // ["MEDIC", "OPERATOR"]
    this.execute();
  }

  execute() {
    const isUserLogged = this.authApplication.isUserLogged;
    const rolesUser = this.storageApplication.getFieldInToken(
      'roles'
    ) as string[];
    const isUserAuthorized = rolesUser.some((role) =>
      this.listRolesAllowed.includes(role)
    );

    if (isUserLogged && isUserAuthorized) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
