import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { FormLoginComponent } from './interfaces/components/form-login/form-login.component';
import { HeaderComponent } from './interfaces/header/header.component';
import { LoginComponent } from './interfaces/login/login.component';
import { MenuComponent } from './interfaces/menu/menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    FormLoginComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    RouterModule,
  ],
  exports: [HeaderComponent, MenuComponent],
})
export class CoreModule {}
