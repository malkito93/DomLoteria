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

//FECHA
const fechaam = document.querySelector('.fecha_am')
const fechaad = document.querySelector('.fecha_ad')
const fechaat = document.querySelector('.fecha_at')
const fechaan = document.querySelector('.fecha_an')

// console.log(quinielaLoteka1)
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(loteria => {

          // FECHAS
          var amfecha= data[0].FechaCorta;
          fechaam.textContent= amfecha;

          var adfecha= data[3].FechaCorta;
          fechaad.textContent= adfecha;

          var atfecha= data[9].FechaCorta;
          fechaat.textContent= atfecha;

          var anfecha= data[13].FechaCorta;
          fechaan.textContent= anfecha;

           // ANGUILLA MANANA
        var am1 = data[0].Elemento1;
        var am2 = data[0].Elemento2;
        var am3 = data[0].Elemento3;

        var amHoy = data[0].Hoy;
        
        


        //NOMBRE SORTEO
        var am_sorteo = data[0].NombreSorteo;
        var amSorteo = document.querySelector('.am_sorteo').textContent = am_sorteo;

        if(amHoy === 'S'){

            anguillaManana1.className ='active_bowling'
            anguillaManana2.className ='active_bowling'
            anguillaManana3.className ='active_bowling'
        }
        
        anguillaManana1.textContent = am1
        anguillaManana2.textContent = am2
        anguillaManana3.textContent = am3
          
           // ANGUILLA DIA
        var ad1 = data[3].Elemento1;
        var ad2 = data[3].Elemento2;
        var ad3 = data[3].Elemento3;

        //NOMBRE SORTEO
        var ad_sorteo = data[3].NombreSorteo;
        var adSorteo = document.querySelector('.ad_sorteo').textContent = ad_sorteo;

        var adHoy = data[3].Hoy;
 
        if(adHoy === 'S'){

            anguillaDia1.className ='active_bowling'
            anguillaDia2.className ='active_bowling'
            anguillaDia3.className ='active_bowling'
        }
        
        anguillaDia1.textContent = ad1
        anguillaDia2.textContent = ad2
        anguillaDia3.textContent = ad3

          // ANGUILLA TARDE 
          var at1 = data[9].Elemento1;
          var at2 = data[9].Elemento2;
          var at3 = data[9].Elemento3;
    
          //NOMBRE SORTEO
        var at_sorteo = data[9].NombreSorteo;
        var atSorteo = document.querySelector('.at_sorteo').textContent = at_sorteo;

          var atHoy = data[9].Hoy;
          if(atHoy === 'S'){
  
            anguillaTarde1.className ='active_bowling'
            anguillaTarde2.className ='active_bowling'
            anguillaTarde3.className ='active_bowling'
          }
          
          anguillaTarde1.textContent = at1
          anguillaTarde2.textContent = at2
          anguillaTarde3.textContent = at3 

           // ANGUILLA NOCHE  
          var an1 = data[14].Elemento1;
          var an2 = data[14].Elemento2;
          var an3 = data[14].Elemento3;

          //NOMBRE SORTEO
        var an_sorteo = data[14].NombreSorteo;
        var anSorteo = document.querySelector('.an_sorteo').textContent = an_sorteo;
        
          var anHoy = data[14].Hoy;
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