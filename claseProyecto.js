export class Proyecto{
    constructor(id, nombre, descripcion){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.trabajadores = [];
    }
    agregarTrabajador(persona){
        let condicion = true;
        for(trabajador of this.trabajadores){
            if(trabajador.id === persona.legajo){
                alert(`${persona.nombre} ya está asociada a este proyecto`);
                condicion = false;
            }
        }
        if(condicion){
            this.trabajadores.push(persona);
            
        }
        return condicion;
    }
    quitarTrabajador(numero){
        this.trabajadores.splice(numero, 1);
    }
}
