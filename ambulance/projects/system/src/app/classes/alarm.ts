export class Alarm {
  dayOfWeek: number;
  hours: number;
  minutes: number;

  constructor(dayOfWeek: number, hours: number, minutes: number) {
    this.dayOfWeek = dayOfWeek;
    this.hours = hours;
    this.minutes = minutes;
  }
}
