import { Role, RoleProperties } from './role';

export class RoleFactory {
  static create(rol: string): Role {
    const roleProperties: RoleProperties = {
      rol,
    };

    if (rol.trim() === '') {
      throw new Error('El rol es requerido');
    }

    return new Role(roleProperties);
  }
}
