import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseInfrastructure } from '../../../core/infrastructure/base-infrastructure';
import { Driver } from '../domain/driver';
import { DriverRepository } from '../domain/driver.repository';

@Injectable()
export class DriverInfrastructure
  extends BaseInfrastructure<Driver>
  implements DriverRepository
{
  constructor(http: HttpClient) {
    super(http, 'drivers');
  }
}
