import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Auth } from '../domain/auth';
import { AuthRepository } from '../domain/auth.repository';
import { StorageRepository } from '../domain/storage.repository';
import { ITokens } from '../domain/tokens.interface';
import { AuthInfrastructure } from '../infrastructure/auth.infrastructure';
import { StorageInfrastructure } from '../infrastructure/storage.infrastructure';

@Injectable()
export class AuthApplication {
  private userLogged = false;

  constructor(
    @Inject(AuthInfrastructure) private readonly authRepository: AuthRepository,
    @Inject(StorageInfrastructure)
    private readonly storageRepository: StorageRepository,
    private readonly router: Router
  ) {}

  login(auth: Auth) {
    this.authRepository.login(auth).subscribe({
      next: this.userAuthenticated.bind(this),
      error: this.showMessageError.bind(this),
    });
  }

  private userAuthenticated(response: ITokens) {
    this.storageRepository.setStorage('accessToken', response.accessToken);
    this.storageRepository.setStorage('refreshToken', response.refreshToken);

    this.userLogged = true;
    this.router.navigate(['/dashboard']);
  }

  private showMessageError(error: any) {
    console.log(error);
  }

  get isUserLogged(): boolean {
    const accessToken = this.storageRepository.getStorage('accessToken');

    return !!accessToken || this.userLogged ? true : false;
  }

  logout() {
    this.userLogged = false;
    this.storageRepository.clear();
    this.router.navigate(['/']);
  }

  getNewAccessToken(refreshToken: string): Observable<ITokens> {
    return this.authRepository.getNewAccessToken(refreshToken);
  }
}
