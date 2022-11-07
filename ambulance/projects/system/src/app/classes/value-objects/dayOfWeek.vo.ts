export class DayOfWeekVO {
  private readonly dayOfWeek: number;
  private constructor(dayOfWeek: number) {
    this.dayOfWeek = dayOfWeek;
  }

  static create(dayOfWeek: number) {
    if (dayOfWeek < 0 || dayOfWeek > 6) {
      throw new Error('dayOfWeek must be between 0 and 6');
    }

    return new DayOfWeekVO(dayOfWeek);
  }

  get value(): number {
    return this.dayOfWeek;
  }
}
