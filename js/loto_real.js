const url = 'http://173.248.151.142:8025/DomLoteria/api/ResultadosHoy';

// LOTEKA 
const quinielaReal1 = document.querySelector('.quiniela_real1')
const quinielaReal2 = document.querySelector('.quiniela_real2')
const quinielaReal3 = document.querySelector('.quiniela_real3')

// console.log(quinielaLoteka1)
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(loteria => {

            //LOTEKA
            var qr1 = data[3].Sorteos[0].Elemento1;
            var qr2 = data[3].Sorteos[0].Elemento2;
            var qr3 = data[3].Sorteos[0].Elemento3;

            var qrHoy = data[3].Sorteos[0].Hoy;
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