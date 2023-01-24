export class InvoiceDetail {
  constructor(
    public productId: number,
    public cantidad: number,
    public descripcion: string,
    public precio: number,
    public total: number
  ) {}
}
