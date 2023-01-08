export interface MedicRequired {
  nombre: string;
  apellido: string;
  segundo_nombre: string;
  cmp: string;
  correo: string;
  dni: string;
  foto: string;
}

export interface MedicOptional {
  id: number;
  activo: boolean;
}

export type MedicProperties = MedicRequired & Partial<MedicOptional>;

export type MedicUpdate = Partial<{
  nombre: string;
  apellido: string;
  segundo_nombre: string;
  cmp: string;
  correo: string;
  dni: string;
  foto: string;
}>;
