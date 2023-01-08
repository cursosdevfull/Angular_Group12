import { Inject, Injectable } from '@angular/core';

import { StorageRepository } from '../domain/storage.repository';
import { StorageInfrastructure } from '../infrastructure/storage.infrastructure';

@Injectable()
export class StorageApplication {
  constructor(
    @Inject(StorageInfrastructure) private readonly storage: StorageRepository
  ) {}

  setField(propertyName: string, value: string): void {
    this.storage.setStorage(propertyName, value);
  }

  getField(propertyName: string): string | null {
    return this.storage.getStorage(propertyName);
  }

  clear(): void {
    this.storage.clear();
  }
}
