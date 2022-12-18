import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditDriverComponent } from './interfaces/views/edit-driver/edit-driver.component';
import { ListDriverComponent } from './interfaces/views/list-driver/list-driver.component';

const routes: Routes = [
  { path: '', component: ListDriverComponent },
  { path: ':id', component: EditDriverComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverRoutingModule {}
