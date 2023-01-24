import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { AuthorizationGuard } from '../../shared/guards/authorization.guard';
import { ListMedicComponent } from './interfaces/views/list-medic/list-medic.component';

const routes: Routes = [
  {
    path: '',
    component: ListMedicComponent,
    canActivate: [AuthenticationGuard, AuthorizationGuard],
    data: { rolesAllowed: 'MEDIC,ADMIN' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicRoutingModule {}
