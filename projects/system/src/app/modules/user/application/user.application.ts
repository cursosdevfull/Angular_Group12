import { Inject, Injectable } from '@angular/core';

import { BaseApplication } from '../../../core/application/base-application';
import { User } from '../domain/user';
import { UserRepository } from '../domain/user.repository';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';

@Injectable()
export class UserApplication extends BaseApplication<User, UserRepository> {
  constructor(
    @Inject(UserInfrastructure)
    private readonly userRepository: UserRepository
  ) {
    super(userRepository);
  }
}
