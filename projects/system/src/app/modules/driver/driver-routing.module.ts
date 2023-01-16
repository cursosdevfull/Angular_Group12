import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { ListDriverComponent } from './interfaces/views/list-driver/list-driver.component';

const routes: Routes = [
  {
    path: '',
    component: ListDriverComponent,
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverRoutingModule {}
