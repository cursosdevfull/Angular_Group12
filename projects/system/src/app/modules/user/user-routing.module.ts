import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { ListUserComponent } from './interfaces/list-user/list-user.component';

const routes: Routes = [
  {
    path: '',
    component: ListUserComponent,
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
