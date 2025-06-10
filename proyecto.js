import {Proyecto} from './claseProyecto.js';
import {Persona} from './clasePersona.js';

const personas = JSON.parse(localStorage.getItem('key'));
console.log(personas);

let trabajadoresAfiliados = [];
let proyectos = [];

function obtenerValoresSelect(){
    personas.forEach(persona => {
        let option = document.createElement('option');
        option.value = persona.legajo;
        option.innerText = persona.legajo + ".- " + persona.nombre + " (" + persona.rol + ")";
        document.getElementById('selectPersonasAfiliadas').appendChild(option);
    });
}

function anadirTrabajador(){
    document.getElementById('divPersonasAgregadas').innerHTML = '';
   const legajoSeleccionado = parseInt(document.getElementById("selectPersonasAfiliadas").value);   
   const personaSeleccionada = personas.find(p => p.legajo === legajoSeleccionado);

   trabajadoresAfiliados.push(personaSeleccionada);
   console.log(trabajadoresAfiliados);

   let p = document.createElement('p');
   trabajadoresAfiliados.forEach(trabajador => {
        p.innerText+=trabajador.legajo + '.- ' + trabajador.nombre + ' (' + trabajador.rol + ')';
        p.innerText+='\n'
    });

    document.getElementById('divPersonasAgregadas').appendChild(p);
}


document.getElementById('buttonAnadirTrabajador').addEventListener("click", (event) => {
    event.preventDefault();
    anadirTrabajador();
});

obtenerValoresSelect();

