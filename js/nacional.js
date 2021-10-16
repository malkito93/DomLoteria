const url = 'http://173.248.151.142:8025/DomLoteria/api/ResultadosHoy';

// ANGUILLA TARDE
const nacionalTarde1 = document.querySelector('.nacional_tarde1')
const nacionalTarde2 = document.querySelector('.nacional_tarde2')
const nacionalTarde3 = document.querySelector('.nacional_tarde3')

// NACIONAL NOCHE
const nacionalNoche1 = document.querySelector('.nacional_noche1')
const nacionalNoche2 = document.querySelector('.nacional_noche2')
const nacionalNoche3 = document.querySelector('.nacional_noche3')

// FECHA
const fechant = document.querySelector('.fecha_nt')
const fechann = document.querySelector('.fecha_nn')


fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(loteria => {

            //NACIONAL  TARDE
            var nt1 = data[0].Sorteos[0].Elemento1;
            var nt2 = data[0].Sorteos[0].Elemento2;
            var nt3 = data[0].Sorteos[0].Elemento3;

            //NOMBRE SORTEO
        var nt_sorteo = data[0].Sorteos[0].NombreSorteo;
        var ntSorteo = document.querySelector('.nt_sorteo').textContent = nt_sorteo;

            nacionalTarde1.textContent = nt1
            nacionalTarde2.textContent = nt2
            nacionalTarde3.textContent = nt3
            
            var ntHoy = data[0].Sorteos[0].Hoy;
           
            if (ntHoy === 'S') {

                nacionalTarde1.className = 'active_bowling'
                nacionalTarde2.className = 'active_bowling'
                nacionalTarde3.className = 'active_bowling'

            }
            //FECHA
            var date_nt = data[0].Sorteos[0].FechaCorta
            fechant.textContent = date_nt

            //NACIONAL NOCHE
            var nn1 = data[0].Sorteos[1].Elemento1;
            var nn2 = data[0].Sorteos[1].Elemento2;
            var nn3 = data[0].Sorteos[1].Elemento3;

            //NOMBRE SORTEO
        var nn_sorteo = data[0].Sorteos[1].NombreSorteo;
        var nnSorteo = document.querySelector('.nn_sorteo').textContent = nn_sorteo;
        
            nacionalNoche1.textContent = nn1
            nacionalNoche2.textContent = nn2
            nacionalNoche3.textContent = nn3

            var nnHoy = data[0].Sorteos[1].Hoy;
            if (nnHoy === 'S') {

                nacionalNoche1.className = 'active_bowling'
                nacionalNoche2.className = 'active_bowling'
                nacionalNoche3.className = 'active_bowling'
            }

           //FECHA
           var date_nn = data[0].Sorteos[0].FechaCorta
           fechant.textContent = date_nn

        });
    })