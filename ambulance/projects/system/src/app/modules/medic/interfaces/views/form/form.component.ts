import { Component, OnChanges, OnInit } from '@angular/core';

import { MedicApplication } from '../../../application/medic.application';
import { MedicRepository } from '../../../domain/repositories/medic.repository';
import { MedicInfrastructure } from '../../../infrastructure/medic.infrastructure';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnChanges {
  constructor() {}

  ngOnChanges() {}

  async ngOnInit() {
    const infrastructure: MedicRepository = new MedicInfrastructure();
    const application = new MedicApplication(infrastructure);

    await application.createMedic(
      'Juan',
      'Carrasco',
      '134',
      '999999999',
      'email@correo.com'
    );
  }
}
