import { History, HistoryProperties } from './history';

export class HistoryFactory {
  static create(
    contratante: string,
    requerido: string,
    poliza: string,
    dni: string,
    nombre: string,
    apellido: string,
    telefono: string,
    edad: number,
    sexo: number,
    diagnostico: string,
    sintomas: string,
    tratamiento: string,
    medico: any
  ): History {
    const historyProperties: HistoryProperties = {
      contratante,
      requerido,
      poliza,
      dni,
      nombre,
      apellido,
      telefono,
      edad,
      sexo,
      diagnostico,
      sintomas,
      tratamiento,
      medico,
    };

    if (contratante.trim() === '') {
      throw new Error('El contratante es requerido');
    }

    return new History(historyProperties);
  }
}
