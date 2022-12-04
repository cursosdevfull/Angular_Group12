import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LAYOUT_CONSTANTS } from './config/constants/layout.constant';
import { LayoutModule } from './config/modules/layout.module';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './core/interfaces/login/login.component';
import { MedicModule } from './modules/medic/medic.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'driver',
    loadChildren: () =>
      import('./modules/driver/driver.module').then((m) => m.DriverModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MedicModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(routes),
    LayoutModule.forRoot(LAYOUT_CONSTANTS),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
