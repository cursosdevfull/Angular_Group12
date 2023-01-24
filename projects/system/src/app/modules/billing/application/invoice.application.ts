import { Inject, Injectable } from '@angular/core';

import { BaseApplication } from '../../../core/application/base-application';
import { Invoice } from '../domain/invoice';
import { InvoiceRepository } from '../domain/invoice.repository';
import { InvoiceInfrastructure } from '../infrastructure/invoice.infrastructure';

@Injectable()
export class InvoiceApplication extends BaseApplication<
  Invoice,
  InvoiceRepository
> {
  constructor(
    @Inject(InvoiceInfrastructure)
    private readonly invoiceRepository: InvoiceRepository
  ) {
    super(invoiceRepository);
  }
}
