import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amb-user',
  templateUrl: './user.component.html',
  styles: [],
})
export class UserComponent implements OnInit {
  @Input() name: string = 'Sergio';

  constructor() {}

  ngOnInit(): void {}
}
