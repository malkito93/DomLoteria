const url = 'http://173.248.151.142:8025/DomLoteria/api/ResultadosHoy';

// LOTEKA 
const quinielaReal1 = document.querySelector('.quiniela_real1')
const quinielaReal2 = document.querySelector('.quiniela_real2')
const quinielaReal3 = document.querySelector('.quiniela_real3')

//FECHA
const fechaqr = document.querySelector('.fecha_lr')

// console.log(quinielaLoteka1)
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(loteria => {

             // FECHAS
          var lrfecha= data[17].FechaCorta;
          fechaqr.textContent= lrfecha;

            //QUINIELA REAL
            var qr1 = data[17].Elemento1;
            var qr2 = data[17].Elemento2;
            var qr3 = data[17].Elemento3;

            //NOMBRE SORTEO
        var qr_sorteo = data[17].NombreSorteo;
        var qrSorteo = document.querySelector('.qr_sorteo').textContent = qr_sorteo;
        
            var qrHoy = data[17].Hoy;
            if (qrHoy === 'S') {

                quinielaReal1.className = 'active_bowling'
                quinielaReal2.className = 'active_bowling'
                quinielaReal3.className = 'active_bowling'
            }

            quinielaReal1.textContent = qr1
            quinielaReal2.textContent = qr2
            quinielaReal3.textContent = qr3
        });
    })