import { Auth, AuthProperties } from './auth';

export class AuthFactory {
  static create(correo: string, password: string): Auth {
    const recaptchaReactive = 'abc';
    const authProperties: AuthProperties = {
      correo,
      password,
      recaptchaReactive,
    };

    if (correo.trim() === '') {
      throw new Error('Correo no puede ser vacío');
    }

    if (password.trim() === '') {
      throw new Error('Password no puede ser vacío');
    }

    return new Auth(authProperties);
  }
}
