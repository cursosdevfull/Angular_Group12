import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CovidRepository } from '../domain/covid.repository';
import { External } from '../domain/external.interface';

@Injectable()
export class CovidInfrastructure implements CovidRepository {
  constructor(private readonly http: HttpClient) {}

  getGraph(): Observable<External[]> {
    return this.http.get<External[]>('http://localhost:8080');
  }
}
