export interface AuthRequired {
  correo: string;
  password: string;
}

export interface AuthOptional {
  recaptchaReactive: string;
}

export type AuthProperties = AuthRequired & Partial<AuthOptional>;

export class Auth {
  private readonly correo: string;
  private password: string;
  private recaptchaReactive: string;

  constructor(properties: AuthProperties) {
    Object.assign(this, properties);
  }

  properties(): AuthProperties {
    return {
      correo: this.correo,
      password: this.password,
      recaptchaReactive: this.recaptchaReactive,
    };
  }
}
