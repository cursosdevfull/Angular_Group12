import { Component } from '@angular/core';

import { Alarm } from './classes/alarm';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listAlarms: Alarm[] = [];

  addAlarm(alarm: Alarm) {
    this.listAlarms.unshift(alarm);
  }

  /*  @ViewChild(UserComponent) userComponent?: UserComponent;
  title = 'system';

  name?: string;
  age?: number;

  userName?: string;
  userAge?: number;

  users = ['John', 'Jane', 'Bob', 'Alice'];

  listUsers = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 40 },
    { name: 'Alice', age: 50 },
  ];

  info(evt: IUser) {
    this.name = evt.name;
    this.age = evt.age;
    console.log(evt);
    console.log('Output from child component');
    console.log(this.userComponent);
  }

  getUserName(evt: any) {
    console.log(evt.target.value);
    this.userName = evt.target.value;
  }

  getUserAge(evt: any) {
    console.log(evt.target.value);
    this.userAge = +evt.target.value;
  }

  addUser() {
    if (this.userName && this.userAge) {
      this.listUsers.unshift({ name: this.userName, age: this.userAge });
    }
  } */
}
