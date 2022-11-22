let mostrarFecha = document.getElementById("fecha");
let mostrarReloj = document.getElementById("reloj");

let fecha = new Date();

let diaSemana = ["domingo","lunes","martes","miercole","jueves", "viernes","sabado"];

let mesAño = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

mostrarFecha.innerHTML = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAño[fecha.getMonth()]} de ${fecha.getFullYear()}`;

setInterval(()=>{
    let hora = new Date();
    mostrarReloj.innerHTML = hora.toLocaleTimeString();
}, 1000);