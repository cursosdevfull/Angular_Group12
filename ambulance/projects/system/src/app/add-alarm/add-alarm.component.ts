import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Alarm } from '../classes/alarm';

@Component({
  selector: 'amb-add-alarm',
  templateUrl: './add-alarm.component.html',
  styleUrls: ['./add-alarm.component.css'],
})
export class AddAlarmComponent implements OnInit {
  @Output() onAddAlarm: EventEmitter<Alarm> = new EventEmitter<Alarm>();

  dayOfWeek: number = 0;
  hours: number = 0;
  minutes: number = 0;

  constructor() {}

  ngOnInit(): void {}

  getDayOfWeek(evt: Event) {
    this.dayOfWeek = +(evt.target as HTMLInputElement).value;
  }

  getHours(evt: Event) {
    this.hours = +(evt.target as HTMLInputElement).value;
  }

  getMinutes(evt: Event) {
    this.minutes = +(evt.target as HTMLInputElement).value;
  }

  addUser() {
    if (this.dayOfWeek && this.hours && this.minutes) {
      const alarm: Alarm = new Alarm(this.dayOfWeek, this.hours, this.minutes);
      this.onAddAlarm.emit(alarm);
    }
  }
}
