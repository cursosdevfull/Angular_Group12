import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './interfaces/dashboard/dashboard.component';
import { CovidComponent } from './interfaces/covid/covid.component';
import { SocketComponent } from './interfaces/socket/socket.component';

@NgModule({
  declarations: [DashboardComponent, CovidComponent, SocketComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxChartsModule,
  ],
})
export class DashboardModule {}
