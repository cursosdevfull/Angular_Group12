import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicModule } from './modules/medic/medic.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MedicModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
