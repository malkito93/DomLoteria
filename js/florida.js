const url = 'http://173.248.151.142:8025/DomLoteria/api/ResultadosHoy';

// NEW YORK DIA
const newYorkDia1 = document.getElementById('new_york_dia1')
const newYorkDia2 = document.getElementById('new_york_dia2')
const newYorkDia3 = document.getElementById('new_york_dia3')

// NEW YORK NOCHE
const newYorkNoche1 = document.getElementById('new_york_noche1')
const newYorkNoche2 = document.getElementById('new_york_noche2')
const newYorkNoche3 = document.getElementById('new_york_noche3')

// FLORIDA DIA
const floridaDia1 = document.querySelector('.florida_dia1')
const floridaDia2 = document.querySelector('.florida_dia2')
const floridaDia3 = document.querySelector('.florida_dia3')

// FLORIDA NOCHE
const floridaNoche1 = document.querySelector('.florida_noche1')
const floridaNoche2 = document.querySelector('.florida_noche2')
const floridaNoche3 = document.querySelector('.florida_noche3')

// console.log(quinielaLoteka1)
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(loteria => {

            //NEW YORK DIA
            var nyd1 = data[7].Sorteos[0].Elemento1;
          var nyd2 = data[7].Sorteos[0].Elemento2;
          var nyd3 = data[7].Sorteos[0].Elemento3;

          //NOMBRE SORTEO
        var nyd_sorteo = data[7].Sorteos[0].NombreSorteo;
        var nydSorteo = document.querySelector('.nyd_sorteo').textContent = nyd_sorteo;

          var nydHoy = data[7].Sorteos[0].Hoy;
          if(nydHoy === 'S'){
  
            newYorkDia1.className ='active_bowling'
            newYorkDia2.className ='active_bowling'
            newYorkDia3.className ='active_bowling'
          }
 
          newYorkDia1.textContent = nyd1
          newYorkDia2.textContent = nyd2
          newYorkDia3.textContent = nyd3 
          
          // NEW YORK TARDE 
          var nyn1 = data[7].Sorteos[1].Elemento1;
          var nyn2 = data[7].Sorteos[1].Elemento2;
          var nyn3 = data[7].Sorteos[1].Elemento3;

           //NOMBRE SORTEO
        var nt_sorteo = data[0].Sorteos[0].NombreSorteo;
        var ntSorteo = document.querySelector('.nt_sorteo').textContent = nt_sorteo;
        
          var nynHoy = data[7].Sorteos[1].Hoy;
          if(nynHoy === 'S'){
  
            newYorkNoche1.className ='active_bowling'
            newYorkNoche2.className ='active_bowling'
            newYorkNoche3.className ='active_bowling'
     }
 
          newYorkNoche1.textContent = nyn1
          newYorkNoche2.textContent = nyn2
          newYorkNoche3.textContent = nyn3

          // FLORIDA DIA 
          var fd1 = data[7].Sorteos[2].Elemento1;
          var fd2 = data[7].Sorteos[2].Elemento2;
          var fd3 = data[7].Sorteos[2].Elemento3;
    
           //NOMBRE SORTEO
        var fd_sorteo = data[7].Sorteos[2].NombreSorteo;
        var fdSorteo = document.querySelector('.fd_sorteo').textContent = fd_sorteo;

          var fdHoy = data[7].Sorteos[2].Hoy;
          if(fdHoy === 'S'){
  
              floridaDia1.className ='active_bowling'
              floridaDia2.className ='active_bowling'
              floridaDia3.className ='active_bowling'
            }
 
          floridaDia1.textContent = fd1
          floridaDia2.textContent = fd2
          floridaDia3.textContent = fd3 

           // FLORIDA NOCHE
           var fn1 = data[7].Sorteos[3].Elemento1;
           var fn2 = data[7].Sorteos[3].Elemento2;
           var fn3 = data[7].Sorteos[3].Elemento3;

            //NOMBRE SORTEO
        var fn_sorteo = data[7].Sorteos[3].NombreSorteo;
        var fnSorteo = document.querySelector('.fn_sorteo').textContent = fn_sorteo;

           var fnHoy = data[7].Sorteos[3].Hoy;
           if(fnHoy === 'S'){
  
            floridaNoche1.className ='active_bowling'
            floridaNoche2.className ='active_bowling'
            floridaNoche3.className ='active_bowling'

          }
 
          floridaNoche1.textContent = fn1
          floridaNoche2.textContent = fn2
          floridaNoche3.textContent = fn3 

        });
    })