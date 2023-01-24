export interface StorageRepository {
  setStorage(propertyName: string, value: string): void;
  getStorage(propertyName: string): string | null;
  getFieldInToken(field: string): string | string[];
  clear(): void;
}
