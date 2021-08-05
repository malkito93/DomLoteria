var menuopen = document.getElementById('loterias_menu');
var submenu = document.getElementById('Submenu');
var fechaActual = document.getElementById('cards_dates')
var fechaActualNacional = document.getElementById('cards_dates_nacional')


//ESTO ES UNA PRUEBA

/* 

 */

//HASTA AQUI ES PRUEBA 

var fechaMananaLeidsa = document.getElementById('cards_tomrow_leidsa') 
var fechaMananaNacional = document.getElementById('cards_tomrow_nacional')


// Menu plegable (Submenu)
function show_menu(){
    submenu.classList.toggle('show')
}

function cerrar(){
    submenu.removeClass('show')
};


//OPERACION FECHA DE HOY 
let hoy = new Date()
const meses = ['enero', 'Febrero','Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre', 'Disciembre']

let hora = hoy.getHours(); 
let dia = hoy.getDate();
let mes = hoy.getMonth();
let anio = hoy.getFullYear();

if (hora > 23){
    bolo1_Nacional.style.color ="gray"
}
let pmes = meses[mes]
//AA-MM-DD
let formato1 = `${dia} de ${pmes} (${anio})`
let diaDeManana = `${dia + 1} de ${pmes} (${anio})`

// FECHA DE HOY CARDS
fechaActual.textContent = formato1;
fechaActualNacional.textContent = formato1;

// FECHA DE MANANA CARDS
fechaMananaLeidsa.textContent = diaDeManana;
fechaMananaNacional.textContent = diaDeManana;

