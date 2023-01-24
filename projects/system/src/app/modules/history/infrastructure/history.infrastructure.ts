import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseInfrastructure } from '../../../core/infrastructure/base-infrastructure';
import { History } from '../domain/history';
import { HistoryRepository } from '../domain/history.repository';

@Injectable()
export class HistoryInfrastructure
  extends BaseInfrastructure<History>
  implements HistoryRepository
{
  constructor(http: HttpClient) {
    super(http, 'historys');
  }
}
