import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LAYOUT_CONSTANTS } from './config/constants/layout.constant';
import { LayoutModule } from './config/modules/layout.module';
import { CoreModule } from './core/core.module';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { LoginComponent } from './core/interfaces/login/login.component';
import { AuthApplication } from './modules/auth/application/auth.application';
import { StorageApplication } from './modules/auth/application/storage.application';
import { AuthModule } from './modules/auth/auth.module';
import { AuthInfrastructure } from './modules/auth/infrastructure/auth.infrastructure';
import { StorageInfrastructure } from './modules/auth/infrastructure/storage.infrastructure';
import { DriverApplication } from './modules/driver/application/driver.application';
import { DriverInfrastructure } from './modules/driver/infrastructure/driver.infrastructure';
import { MedicApplication } from './modules/medic/application/medic.application';
import { MedicInfrastructure } from './modules/medic/infrastructure/medic.infrastructure';
import { Paginator } from './shared/classes/paginator';
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'driver',
    loadChildren: () =>
      import('./modules/driver/driver.module').then((m) => m.DriverModule),
    canLoad: [AuthenticationGuard],
  },
  {
    path: 'medic',
    loadChildren: () =>
      import('./modules/medic/medic.module').then((m) => m.MedicModule),
    canLoad: [AuthenticationGuard],
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./modules/history/history.module').then((m) => m.HistoryModule),
    canLoad: [AuthenticationGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canLoad: [AuthenticationGuard],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
    canLoad: [AuthenticationGuard],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

const application = [
  AuthApplication,
  StorageApplication,
  DriverApplication,
  MedicApplication,
];
const infrastructure = [
  AuthInfrastructure,
  StorageInfrastructure,
  DriverInfrastructure,
  MedicInfrastructure,
];
const interceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
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
    AuthModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MatPaginatorIntl, useClass: Paginator },
    ...infrastructure,
    ...application,
    ...interceptors,
  ],
})
export class AppModule {}
