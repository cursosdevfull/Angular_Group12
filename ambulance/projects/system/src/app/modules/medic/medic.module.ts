import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormComponent } from './interfaces/views/form/form.component';
import { ListComponent } from './interfaces/views/list/list.component';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule],
  exports: [FormComponent, ListComponent],
})
export class MedicModule {}
