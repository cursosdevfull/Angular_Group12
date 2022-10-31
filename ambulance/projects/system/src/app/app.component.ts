import { Component } from '@angular/core';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'system';

  users = ['John', 'Jane', 'Bob', 'Alice'];

  listUsers = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 40 },
    { name: 'Alice', age: 50 },
  ];
}
