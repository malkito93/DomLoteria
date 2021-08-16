var menuopen = document.getElementById('loterias_menu');
var submenu = document.getElementById('Submenu');
var fechaActual = document.querySelectorAll('#cards_date')
var fechaActualNacional = document.getElementById('cards_dates_nacional')

// console.log(fechaActual)
// FECHAS CARDS

var fechaManana = document.querySelectorAll('#cards_tomrow') 
// console.log(fechaManana)


// SUBMENU DESPLEGABLE
function show_menu(){
    submenu.classList.toggle('show')
    submenu.style.top= '84px'
}
submenu.addEventListener('click', e =>{
    if (e.target === submenu);
})



//FECHA DE HOY 
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

// console.log(diaDeManana)
// AGREGAR FECHA DE HOY CARDS

for(var i=0; i<fechaActual.length; i++){
    fechaActual[i].textContent = formato1;
 }

//AGREGAR FECHA DE MANANA (CARDS)
 
  for(var i=0; i<fechaManana.length; i++){
     fechaManana[i].textContent = diaDeManana;
  }

