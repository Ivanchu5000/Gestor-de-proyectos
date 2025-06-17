import {Proyecto} from './claseProyecto.js';
import {Persona} from './clasePersona.js';

let personas = [];
let legajoActual = 1;

// Intentar cargar personas desde localStorage
const personasGuardadas = localStorage.getItem('key');

if (personasGuardadas) {
    // Ya había personas guardadas → restaurarlas
    personas = JSON.parse(personasGuardadas);

    // Si hay personas, continuar legajo desde el último
    if (personas.length > 0) {
        legajoActual = Math.max(...personas.map(p => p.legajo)) + 1;
    }

    // Mostrar personas en la tabla
    actualizarTabla();
}

const inputNombre = document.getElementById('inputNombrePersona');
const inputCorreoElectronico = document.getElementById('inputCorreoElectronico');
const selectRol = document.getElementById('selectRol');

const botonPersonas = document.getElementById('botonAgregarPersonas');

function agregarPersonas(){   
    if(inputNombre.value == '' || inputCorreoElectronico.value == '' || selectRol.value == ''){
        alert('Datos incompletos: rellene todos los campos');
        return;
    }
    let correoExistente = personas.find(p => inputCorreoElectronico.value === p.correo);
    if(correoExistente){
         alert('Introduzca un correo electrónico no repetido');
        return;
    }
    let objetoPersona = new Persona(legajoActual, inputNombre.value, inputCorreoElectronico.value, selectRol.value);
    personas.push(objetoPersona);
    legajoActual++;
    inputNombre.value = '';
    inputCorreoElectronico.value = '';
    localStorage.setItem('key',JSON.stringify(personas));
}

function actualizarTabla(){
    const tbody = document.getElementById('tbodyPersonas');
    tbody.innerHTML = '';
    personas.forEach(p => {
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${p.nombre}</td>
                          <td>${p.correo}</td>
                          <td>${p.rol}</td>
                          <td><button class="btnEliminar" data-legajo="${p.legajo}">Eliminar</button></td>`
        document.getElementById('tbodyPersonas').appendChild(fila);
    });
}

function eliminarPersona(legajo){
    personas = personas.filter(persona => persona.legajo !== legajo);
    localStorage.setItem('key',JSON.stringify(personas));
    actualizarTabla();
}
function eliminarTodo(){
    personas = [];
    localStorage.clear();
    actualizarTabla();
}
document.getElementById('tbodyPersonas').addEventListener('click', e => {
    if (e.target.classList.contains('btnEliminar')) {
        const legajo = parseInt(e.target.getAttribute('data-legajo'));
        eliminarPersona(legajo);
        actualizarTabla();
    }
});

document.getElementById('formularioPersona').addEventListener('submit', e => {
    e.preventDefault();
    agregarPersonas();
    actualizarTabla();
});

document.getElementById('buttonEliminarTodo').addEventListener('click', () => {eliminarTodo()});