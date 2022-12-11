import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HistoryRoutingModule } from './history-routing.module';
import { ListHistoryComponent } from './interfaces/list-history/list-history.component';

@NgModule({
  declarations: [ListHistoryComponent],
  imports: [CommonModule, HistoryRoutingModule, SharedModule],
})
export class HistoryModule {}
