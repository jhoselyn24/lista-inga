export class Alumnos {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    edad: number;
    fechaInsc: Date;
    constructor(
        id: number,
        nombre: string,
        apellido: string,
        correo: string,
        edad: number,
        fechaInsc: Date
    ) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.edad = edad;
        this.fechaInsc = fechaInsc;
    }
}