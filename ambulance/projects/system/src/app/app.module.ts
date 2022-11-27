import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './core/interfaces/login/login.component';
import { MedicModule } from './modules/medic/medic.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [{ path: '', component: LoginComponent }];

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
