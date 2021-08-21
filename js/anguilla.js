const url = 'http://173.248.151.142:8025/DomLoteria/api/ResultadosHoy';

//ANGUILLA MANANA 
const anguillaManana1 = document.querySelector('.anguilla_mañana1')
const anguillaManana2 = document.querySelector('.anguilla_mañana2')
const anguillaManana3 = document.querySelector('.anguilla_mañana3')

//ANGUILLA DIA 
const anguillaDia1 = document.querySelector('.anguilla_dia1')
const anguillaDia2 = document.querySelector('.anguilla_dia2')
const anguillaDia3 = document.querySelector('.anguilla_dia3')

// ANGUILLA TARDE
const anguillaTarde1 = document.querySelector('.anguilla_tarde1')
const anguillaTarde2 = document.querySelector('.anguilla_tarde2')
const anguillaTarde3 = document.querySelector('.anguilla_tarde3')

/// ANGUILLA NOCHE
const anguillaNoche1 = document.querySelector('.anguilla_noche1')
const anguillaNoche2 = document.querySelector('.anguilla_noche2')
const anguillaNoche3 = document.querySelector('.anguilla_noche3')



// console.log(quinielaLoteka1)
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(loteria => {

           // ANGUILLA MANANA
        var am1 = data[8].Sorteos[0].Elemento1;
        var am2 = data[8].Sorteos[0].Elemento2;
        var am3 = data[8].Sorteos[0].Elemento3;

        var amHoy = data[8].Sorteos[0].Hoy;

        if(amHoy === 'S'){

            anguillaManana1.className ='active_bowling'
            anguillaManana2.className ='active_bowling'
            anguillaManana3.className ='active_bowling'
        }
        
        anguillaManana1.textContent = am1
        anguillaManana2.textContent = am2
        anguillaManana3.textContent = am3
          
           // ANGUILLA DIA
        var ad1 = data[8].Sorteos[1].Elemento1;
        var ad2 = data[8].Sorteos[1].Elemento2;
        var ad3 = data[8].Sorteos[1].Elemento3;

        var adHoy = data[8].Sorteos[1].Hoy;
 
        if(adHoy === 'S'){

            anguillaDia1.className ='active_bowling'
            anguillaDia2.className ='active_bowling'
            anguillaDia3.className ='active_bowling'
        }
        
        anguillaDia1.textContent = ad1
        anguillaDia2.textContent = ad2
        anguillaDia3.textContent = ad3

          // ANGUILLA TARDE 
          var at1 = data[8].Sorteos[2].Elemento1;
          var at2 = data[8].Sorteos[2].Elemento2;
          var at3 = data[8].Sorteos[2].Elemento3;
    
          var atHoy = data[8].Sorteos[2].Hoy;
          if(atHoy === 'S'){
  
            anguillaTarde1.className ='active_bowling'
            anguillaTarde2.className ='active_bowling'
            anguillaTarde3.className ='active_bowling'
          }
          
          anguillaTarde1.textContent = at1
          anguillaTarde2.textContent = at2
          anguillaTarde3.textContent = at3 

           // ANGUILLA NOCHE  
          var an1 = data[8].Sorteos[3].Elemento1;
          var an2 = data[8].Sorteos[3].Elemento2;
          var an3 = data[8].Sorteos[3].Elemento3;

          var anHoy = data[8].Sorteos[3].Hoy;
          if(anHoy === 'S'){
  
            anguillaNoche1.className ='active_bowling'
            anguillaNoche2.className ='active_bowling'
            anguillaNoche3.className ='active_bowling'
          }
 
          anguillaNoche1.textContent = an1
          anguillaNoche2.textContent = an2
          anguillaNoche3.textContent = an3 

        });
    })