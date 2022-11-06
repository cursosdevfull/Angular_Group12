import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout.component';
import { UserListComponent } from './user-list.component';
import { UserComponent } from './user/user.component';
import { AddAlarmComponent } from './add-alarm/add-alarm.component';
import { ListAlarmComponent } from './list-alarm/list-alarm.component';
import { AlarmComponent } from './alarm/alarm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    UserComponent,
    UserListComponent,
    AddAlarmComponent,
    ListAlarmComponent,
    AlarmComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
