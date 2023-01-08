import { Observable } from 'rxjs';

import { Auth } from './auth';
import { ITokens } from './tokens.interface';

export interface AuthRepository {
  login(auth: Auth): Observable<ITokens>;
  getNewAccessToken(refreshToken: string): Observable<ITokens>;
}
