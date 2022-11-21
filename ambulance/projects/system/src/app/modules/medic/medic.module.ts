import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MedicApplication } from './application/medic.application';
import { MedicInfrastructure } from './infrastructure/medic.infrastructure';
import { FormComponent } from './interfaces/views/form/form.component';
import { ListComponent } from './interfaces/views/list/list.component';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule],
  exports: [FormComponent, ListComponent],
  providers: [MedicInfrastructure, MedicApplication],
})
export class MedicModule {}
