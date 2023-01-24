import { Inject, Injectable } from '@angular/core';

import { BaseApplication } from '../../../core/application/base-application';
import { Role } from '../domain/role';
import { RoleRepository } from '../domain/role.repository';
import { RoleInfrastructure } from '../infrastructure/role.infrastructure';

@Injectable()
export class RoleApplication extends BaseApplication<Role, RoleRepository> {
  constructor(
    @Inject(RoleInfrastructure)
    private readonly roleRepository: RoleRepository
  ) {
    super(roleRepository);
  }
}
