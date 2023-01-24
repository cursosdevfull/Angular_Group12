export interface HistoryRequired {
  contratante: string;
  requerido: string;
  poliza: string;
  dni: string;
  nombre: string;
  apellido: string;
  telefono: string;
  edad: number;
  sexo: number;
  diagnostico: string;
  sintomas: string;
  tratamiento: string;
  medico: any;
}

export interface HistoryOptional {
  id: number;
  activo: boolean;
}

export type HistoryProperties = HistoryRequired & Partial<HistoryOptional>;

export type HistoryUpdate = {
  contratante: string;
  requerido: string;
  poliza: string;
  dni: string;
  nombre: string;
  apellido: string;
  telefono: string;
  edad: number;
  sexo: number;
  diagnostico: string;
  sintomas: string;
  tratamiento: string;
  medico: any;
};

export class History {
  private readonly id: number;
  private contratante: string;
  private requerido: string;
  private poliza: string;
  private dni: string;
  private nombre: string;
  private apellido: string;
  private telefono: string;
  private edad: number;
  private sexo: number;
  private diagnostico: string;
  private sintomas: string;
  private tratamiento: string;
  private activo: boolean;
  private medico: any;

  constructor(properties: HistoryProperties) {
    Object.assign(this, properties);
    this.activo = true;
  }

  properties(): HistoryProperties {
    return {
      id: this.id,
      contratante: this.contratante,
      requerido: this.requerido,
      poliza: this.poliza,
      dni: this.dni,
      nombre: this.nombre,
      apellido: this.apellido,
      telefono: this.telefono,
      edad: this.edad,
      sexo: this.sexo,
      diagnostico: this.diagnostico,
      sintomas: this.sintomas,
      tratamiento: this.tratamiento,
      activo: this.activo,
      medico: this.medico,
    };
  }

  update(properties: HistoryUpdate): void {
    Object.assign(this, properties);
  }

  delete(): void {
    this.activo = false;
  }
}
