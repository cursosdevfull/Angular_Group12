import { InvoiceDetail } from './detail';
import { Invoice, InvoiceProperties } from './invoice';

export class InvoiceFactory {
  static create(
    nombre: string,
    dni: string,
    direccion: string,
    telefono: string,
    numeroFactura: string,
    fecha: string,
    detalle: InvoiceDetail[]
  ): Invoice {
    const invoiceProperties: InvoiceProperties = {
      nombre,
      dni,
      direccion,
      telefono,
      numeroFactura,
      fecha,
      detalle,
    };

    if (nombre.trim() === '') {
      throw new Error('El nombre del comprador es requerido');
    }

    if (detalle === undefined || detalle.length === 0) {
      throw new Error('El detalle de la factura es requerido');
    }

    return new Invoice(invoiceProperties);
  }
}

const detail: InvoiceDetail[] = [
  {
    productId: 1,
    cantidad: 1,
    descripcion: 'Producto 1',
    precio: 100,
    total: 100,
  },
];

const invoice = InvoiceFactory.create(
  'Juan Perez',
  '12345678',
  'Av. Siempre Viva 123',
  '123456789',
  'F001-0001',
  '2020-01-23T14:37:00.000Z',
  detail
);
