import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { DriverRoutingModule } from './driver-routing.module';
import { EditDriverComponent } from './interfaces/views/edit-driver/edit-driver.component';
import { FormDriverComponent } from './interfaces/views/form-driver/form-driver.component';
import { ListDriverComponent } from './interfaces/views/list-driver/list-driver.component';

@NgModule({
  declarations: [ListDriverComponent, FormDriverComponent, EditDriverComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class DriverModule {}
