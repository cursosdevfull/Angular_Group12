export interface DriverRequired {
  nombre: string;
}

export interface DriverOptional {
  id: number;
  activo: boolean;
}

export type DriverProperties = DriverRequired & Partial<DriverOptional>;

export type DriverUpdate = {
  nombre: string;
};

export class Driver {
  private readonly id: number;
  private nombre: string;
  private activo: boolean;

  constructor(properties: DriverProperties) {
    Object.assign(this, properties);
    this.activo = true;
  }

  properties(): DriverProperties {
    return {
      id: this.id,
      nombre: this.nombre,
      activo: this.activo,
    };
  }

  update(properties: DriverUpdate): void {
    Object.assign(this, properties);
  }

  delete(): void {
    this.activo = false;
  }
}
