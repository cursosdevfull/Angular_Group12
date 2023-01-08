import { Inject, Injectable } from '@angular/core';

import { BaseApplication } from '../../../core/application/base-application';
import { Driver } from '../domain/driver';
import { DriverRepository } from '../domain/driver.repository';
import { DriverInfrastructure } from '../infrastructure/driver.infrastructure';

@Injectable()
export class DriverApplication extends BaseApplication<
  Driver,
  DriverRepository
> {
  constructor(
    @Inject(DriverInfrastructure)
    private readonly driverRepository: DriverRepository
  ) {
    super(driverRepository);
  }
}
