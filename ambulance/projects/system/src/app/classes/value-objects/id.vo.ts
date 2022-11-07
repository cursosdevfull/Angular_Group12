import { validate } from 'uuid';

export class IdVO {
  private readonly id: string;
  private constructor(id: string) {
    this.id = id;
  }

  static create(id: string) {
    if (!validate(id)) {
      throw new Error('Invalid id');
    }
    return new IdVO(id);
  }

  get value(): string {
    return this.id;
  }
}
