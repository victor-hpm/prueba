import { Direccion } from './direccion.model';

export interface Persona {
  nombre?: string;
  edad?: number;
  frase?: string;
  direccion?: Direccion;
}