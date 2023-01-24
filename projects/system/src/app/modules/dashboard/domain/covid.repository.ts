import { Observable } from 'rxjs';

import { External } from './external.interface';

export interface CovidRepository {
  getGraph(): Observable<External[]>;
}
