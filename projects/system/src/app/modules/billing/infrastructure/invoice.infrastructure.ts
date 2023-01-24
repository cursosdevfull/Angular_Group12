import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseInfrastructure } from '../../../core/infrastructure/base-infrastructure';
import { Invoice } from '../domain/invoice';
import { InvoiceRepository } from '../domain/invoice.repository';

@Injectable()
export class InvoiceInfrastructure
  extends BaseInfrastructure<Invoice>
  implements InvoiceRepository
{
  constructor(http: HttpClient) {
    super(http, 'invoices');
  }
}
