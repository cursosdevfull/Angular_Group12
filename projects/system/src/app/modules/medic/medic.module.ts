import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MedicRoutingModule } from './medic-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, MedicRoutingModule, SharedModule],
  exports: [],
})
export class MedicModule {}
