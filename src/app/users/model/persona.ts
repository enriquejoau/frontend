export class Persona{

  ID?: number;
  correo: string;
  dni: number;
  estado: string;
  m_apellidos: string;
  nombre: string;
  p_apellidos:string;
  telefono:number;

  constructor( correo: string,
    dni: number,
    estado: string,
    m_apellidos: string,
    nombre: string,
    p_apellidos:string,
    telefono:number) {

    this.correo = correo;
    this.dni = dni;
    this.estado = estado;
    this.m_apellidos = m_apellidos;
    this.nombre = nombre;
    this.p_apellidos = p_apellidos;
    this.telefono = telefono;
}
}
