export interface RoleRequired {
  rol: string;
}

export interface RoleOptional {
  id: number;
}

export type RoleProperties = RoleRequired & Partial<RoleOptional>;

export type RoleUpdate = {
  rol: string;
};

export class Role {
  readonly id: number;
  rol: string;

  constructor(properties: RoleProperties) {
    Object.assign(this, properties);
  }

  properties(): RoleProperties {
    return {
      id: this.id,
      rol: this.rol,
    };
  }
}
