import { InvoiceDetail } from './detail';

export interface InvoiceRequired {
  nombre: string;
  dni: string;
  direccion: string;
  telefono: string;
  numeroFactura: string;
  fecha: string;
  detalle: InvoiceDetail[];
}

export interface InvoiceOptional {
  id: number;
  activo: boolean;
}

export type InvoiceProperties = InvoiceRequired & Partial<InvoiceOptional>;

export type InvoiceUpdate = {
  nombre: string;
  dni: string;
  direccion: string;
  telefono: string;
  numeroFactura: string;
  fecha: string;
  detalle: InvoiceDetail[];
};

export class Invoice {
  private readonly id: number;
  private nombre: string;
  private dni: string;
  private direccion: string;
  private telefono: string;
  private numeroFactura: string;
  private fecha: string;
  private detalle: InvoiceDetail[];
  private activo: boolean;

  constructor(properties: InvoiceProperties) {
    Object.assign(this, properties);
    this.activo = true;
  }

  properties(): InvoiceProperties {
    return {
      id: this.id,
      nombre: this.nombre,
      dni: this.dni,
      direccion: this.direccion,
      telefono: this.telefono,
      numeroFactura: this.numeroFactura,
      fecha: this.fecha,
      detalle: this.detalle,
      activo: this.activo,
    };
  }

  update(properties: InvoiceUpdate): void {
    Object.assign(this, properties);
  }

  delete(): void {
    this.activo = false;
  }
}
