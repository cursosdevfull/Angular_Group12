import { Inject, Injectable } from '@angular/core';

import { CovidRepository } from '../domain/covid.repository';
import { CovidInfrastructure } from '../infrastructure/covid.infrastructure';

@Injectable()
export class CovidApplication {
  constructor(
    @Inject(CovidInfrastructure)
    private readonly covidRepository: CovidRepository
  ) {}

  getGraph() {
    return this.covidRepository.getGraph();
  }
}
