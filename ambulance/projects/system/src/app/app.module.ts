import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LAYOUT_CONSTANTS } from './config/constants/layout.constant';
import { LayoutModule } from './config/modules/layout.module';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './core/interfaces/login/login.component';
import { Paginator } from './shared/classes/paginator';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'driver',
    loadChildren: () =>
      import('./modules/driver/driver.module').then((m) => m.DriverModule),
  },
  {
    path: 'medic',
    loadChildren: () =>
      import('./modules/medic/medic.module').then((m) => m.MedicModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./modules/history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(routes),
    LayoutModule.forRoot(LAYOUT_CONSTANTS),
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: MatPaginatorIntl, useClass: Paginator }],
})
export class AppModule {}
