const url = 'http://173.248.151.142:8025/DomLoteria/api/ResultadosHoy';

//LA PRIMERA
const laPrimera1 = document.querySelector('.la_primera1')
const laPrimera2 = document.querySelector('.la_primera2')
const laPrimera3 = document.querySelector('.la_primera3')

// LOTEDOM
const lotedom1 = document.querySelector('.lotedom1')
const lotedom2 = document.querySelector('.lotedom2')
const lotedom3 = document.querySelector('.lotedom3')

// console.log(quinielaLoteka1)
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(loteria => {

            // LA PRIMERA
        var lp1 = data[5].Sorteos[0].Elemento1;
        var lp2 = data[5].Sorteos[0].Elemento2;
        var lp3 = data[5].Sorteos[0].Elemento3;

        var lpHoy = data[5].Sorteos[0].Hoy;

        if(lpHoy === 'S'){

            laPrimera1.className ='active_bowling'
            laPrimera2.className ='active_bowling'
            laPrimera3.className ='active_bowling'
        }
        
        laPrimera1.textContent = lp1
        laPrimera2.textContent = lp2
        laPrimera3.textContent = lp3
          

           // LOTEDOM 
          var ld1 = data[5].Sorteos[1].Elemento1;
          var ld2 = data[5].Sorteos[1].Elemento2;
          var ld3 = data[5].Sorteos[1].Elemento3;

          var ldHoy = data[5].Sorteos[1].Hoy;
          if(ldHoy === 'S'){
  
            lotedom1.className ='active_bowling'
            lotedom2.className ='active_bowling'
            lotedom3.className ='active_bowling'
          }
 
          lotedom1.textContent = ld1
          lotedom2.textContent = ld2
          lotedom3.textContent = ld3

        });
    })