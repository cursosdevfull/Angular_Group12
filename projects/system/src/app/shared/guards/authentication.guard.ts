import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

import { AuthApplication } from '../../modules/auth/application/auth.application';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanLoad, CanActivate {
  constructor(
    private readonly auth: AuthApplication,
    private readonly router: Router
  ) {}

  canLoad(): boolean {
    const isLogged = this.auth.isUserLogged;
    if (!isLogged) {
      this.router.navigate(['/']);
    }
    return isLogged;
  }

  canActivate(): boolean {
    const isLogged = this.auth.isUserLogged;
    if (!isLogged) {
      this.router.navigate(['/']);
    }
    return isLogged;
  }

  private validUserLogged(): boolean {
    const isLogged = this.auth.isUserLogged;
    if (!isLogged) {
      this.auth.logout();
    }

    return isLogged;
  }
}
