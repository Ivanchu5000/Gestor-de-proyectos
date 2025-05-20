export class Persona{
    constructor(legajo,nombre, correo, rol){
        this.legajo = legajo;
        this.nombre = nombre;
        this.correo = correo;
        this.rol = rol;
    }

    actualizarCorreo(nuevoCorreo){
        this.correo = nuevoCorreo;
    }

    actualizarRol(nuevoRol){
        this.rol = nuevoRol
    }
}