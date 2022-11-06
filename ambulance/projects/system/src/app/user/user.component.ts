import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'amb-user',
  templateUrl: './user.component.html',
  styles: [],
})
export class UserComponent implements OnInit {
  @Input() name: string = 'Sergio';
  @Input() age: number = 0;
  @Output() dataUser: EventEmitter<IUser> = new EventEmitter();

  constructor() {
    // window.addEventListener('resize', () => alert('Window resized'));
  }

  ngOnInit(): void {}

  showInfo(): void {
    alert(`Name: ${this.name}, Age: ${this.age}`);
  }

  sentInfo(): void {
    this.dataUser.emit({ name: this.name, age: this.age });
  }
}
