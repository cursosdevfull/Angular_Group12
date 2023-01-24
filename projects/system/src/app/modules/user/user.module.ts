import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { FormUserComponent } from './interfaces/form-user/form-user.component';
import { ListUserComponent } from './interfaces/list-user/list-user.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    ListUserComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
