import { Component } from '@angular/core';

@Component({
  selector: 'amb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = Math.random();
}
