import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonDevModule, TableDevModule } from 'dev-table';

import { SharedModule } from '../../shared/shared.module';
import { FormMedicComponent } from './interfaces/views/form-medic/form-medic.component';
import { ListMedicComponent } from './interfaces/views/list-medic/list-medic.component';
import { MedicRoutingModule } from './medic-routing.module';


@NgModule({
  declarations: [FormMedicComponent, ListMedicComponent],
  imports: [
    CommonModule,
    SharedModule,
    MedicRoutingModule,
    ReactiveFormsModule,
    TableDevModule,
    ButtonDevModule
  ],
  exports: [],
})
export class MedicModule {}
