import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthApplication } from '../../modules/auth/application/auth.application';
import { StorageApplication } from '../../modules/auth/application/storage.application';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  constructor(
    private readonly authApplication: AuthApplication,
    private readonly storageApplication: StorageApplication
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const rolesUser = this.storageApplication.getFieldInToken(
      'roles'
    ) as string[];

    const data: any = route.data;
    const rolesAllowed = data.rolesAllowed.split(',') as string[];

    const isUserAuthorized = rolesUser.some((role) =>
      rolesAllowed.includes(role)
    );

    console.log('isUserAuthorized', isUserAuthorized);

    return isUserAuthorized;
  }
}
