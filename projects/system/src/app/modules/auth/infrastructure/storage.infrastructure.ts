import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

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

  getFieldInToken(field: string): string | string[] {
    const accessToken = sessionStorage.getItem('accessToken');
    const payload = jwtDecode(accessToken);

    return payload[field];
  }
}
