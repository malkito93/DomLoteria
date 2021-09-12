const url = 'http://173.248.151.142:8025/DomLoteria/api/ResultadosHoy';

//LA SUERTE
const laSuerte1 = document.querySelector('.la_suerte1')
const laSuerte2 = document.querySelector('.la_suerte2')
const laSuerte3 = document.querySelector('.la_suerte3')

// console.log(quinielaLoteka1)
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(loteria => {
          
            // LA SUERTE
            var ls1 = data[6].Sorteos[0].Elemento1;
            var ls2 = data[6].Sorteos[0].Elemento2;
            var ls3 = data[6].Sorteos[0].Elemento3;

             //NOMBRE SORTEO
        var ls_sorteo = data[6].Sorteos[0].NombreSorteo;
        var lsSorteo = document.querySelector('.ls_sorteo').textContent = ls_sorteo;
            var lsHoy = data[6].Sorteos[0].Hoy;
            // console.log(lsHoy)
    
            if(lsHoy === 'S'){
    
                laSuerte1.className ='active_bowling'
                laSuerte2.className ='active_bowling'
                laSuerte3.className ='active_bowling'
            }
            
            laSuerte1.textContent = ls1
            laSuerte2.textContent = ls2
            laSuerte3.textContent = ls3
          

        });
    })