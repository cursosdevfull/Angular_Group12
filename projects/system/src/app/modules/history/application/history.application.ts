import { Inject, Injectable } from '@angular/core';

import { BaseApplication } from '../../../core/application/base-application';
import { History } from '../domain/history';
import { HistoryRepository } from '../domain/history.repository';
import { HistoryInfrastructure } from '../infrastructure/history.infrastructure';

@Injectable()
export class HistoryApplication extends BaseApplication<
  History,
  HistoryRepository
> {
  constructor(
    @Inject(HistoryInfrastructure)
    private readonly historyRepository: HistoryRepository
  ) {
    super(historyRepository);
  }
}
