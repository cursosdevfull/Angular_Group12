import { Component, Input, OnInit } from '@angular/core';

import { Alarm } from '../classes/alarm';

@Component({
  selector: 'amb-list-alarm',
  templateUrl: './list-alarm.component.html',
  styleUrls: ['./list-alarm.component.css'],
})
export class ListAlarmComponent implements OnInit {
  @Input() listAlarms: Alarm[] = [];

  constructor() {}

  ngOnInit(): void {}
}
