import { Time } from '../time';

export class TimeVO {
  private readonly time: Time;
  private constructor(hours: number, minutes: number) {
    this.time = new Time(hours, minutes);
  }

  static create(hours: number, minutes: number) {
    if (hours < 8 || hours > 16 || minutes < 0 || minutes > 59) {
      throw new Error('Invalid time');
    }

    return new TimeVO(hours, minutes);
  }

  get value(): Time {
    return this.time;
  }
}
