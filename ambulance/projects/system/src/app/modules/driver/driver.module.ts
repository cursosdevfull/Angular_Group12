import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DriverRoutingModule } from './driver-routing.module';
import { FormDriverComponent } from './interfaces/views/form-driver/form-driver.component';
import { ListDriverComponent } from './interfaces/views/list-driver/list-driver.component';

@NgModule({
  declarations: [ListDriverComponent, FormDriverComponent],
  imports: [CommonModule, DriverRoutingModule],
})
export class DriverModule {}
