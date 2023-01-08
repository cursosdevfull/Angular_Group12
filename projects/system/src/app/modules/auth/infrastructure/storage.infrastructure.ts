import { Injectable } from '@angular/core';

import { StorageRepository } from '../domain/storage.repository';

@Injectable()
export class StorageInfrastructure implements StorageRepository {
  setStorage(propertyName: string, value: string): void {
    sessionStorage.setItem(propertyName, value);
  }

  getStorage(propertyName: string): string | null {
    return sessionStorage.getItem(propertyName);
  }

  clear(): void {
    sessionStorage.clear();
  }
}
