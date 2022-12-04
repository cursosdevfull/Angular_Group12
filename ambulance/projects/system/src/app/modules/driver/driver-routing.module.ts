import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListDriverComponent } from './interfaces/views/list-driver/list-driver.component';

const routes: Routes = [{ path: '', component: ListDriverComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverRoutingModule {}
