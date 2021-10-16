var menuopen = document.getElementById('loterias_menu');
// var fechaActual = document.querySelectorAll('#cards_date')
var fechaActualNacional = document.getElementById('cards_dates_nacional')
var submenu = document.querySelector('.loteries_submenu');
var menuCloser = document.querySelector('.menu_closer')

console.log(submenu)
// FECHAS CARDS

// console.log(fechaManana)


// SUBMENU DESPLEGABLE
function show_menu() {
    submenu.style.display = "flex"

    // alert("ok")
}
// submenu.addEventListener('click', e =>{
//     if (e.target === submenu);
// })

// MENU RESPONSIVE DESPLEGABLE 
var menuResponsive = document.getElementById('menu')
console.log(menu)

function openMenu() {
    menuResponsive.classList.toggle('show_menu')
    menuCloser.classList.toggle('show_menu_closer')

}
window.addEventListener('click', e => {
    if (e.target == menuCloser){
        menuResponsive.classList.toggle('show_menu')
        menuCloser.classList.toggle('show_menu_closer')
    };
    console.log(e.target)
})

// cerrar menu


//FECHA DE HOY 
let hoy = new Date()
const meses = ['enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Disciembre']

let hora = hoy.getHours();
let dia = hoy.getDate();
let mes = hoy.getMonth();
let anio = hoy.getFullYear();

if (hora > 23) {
    bolo1_Nacional.style.color = "gray"
}
let pmes = meses[mes]

//AA-MM-DD
let formato1 = `${dia} de ${pmes} (${anio})`
let diaDeManana = `${dia + 1} de ${pmes} (${anio})`

// console.log(diaDeManana)
// AGREGAR FECHA DE HOY CARDS

// for (var i = 0; i < fechaActual.length; i++) {
//     fechaActual[i].textContent = formato1;
// }


