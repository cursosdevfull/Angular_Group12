import { DayOfWeekVO } from './value-objects/dayOfWeek.vo';
import { IdVO } from './value-objects/id.vo';
import { TimeVO } from './value-objects/time.vo';

export interface AlarmPropertiesEssentials {
  id: IdVO;
  dayOfWeek: DayOfWeekVO;
  time: TimeVO;
}

export type AlarmPropertiesCreate = Required<AlarmPropertiesEssentials>;
export class Alarm {
  private id: IdVO;
  private dayOfWeek: DayOfWeekVO;
  private time: TimeVO;

  constructor(properties: AlarmPropertiesCreate) {
    this.id = properties.id;
    this.dayOfWeek = properties.dayOfWeek;
    this.time = properties.time;
  }

  properties() {
    return {
      id: this.id.value,
      dayOfWeek: this.dayOfWeek.value,
      time: this.time.value,
    };
  }
}
