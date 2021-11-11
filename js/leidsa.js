const url = 'http://173.248.151.142:8025/DomLoteria/api/ResultadosHoy';

// quiniela pale
const quinielaPale1 = document.querySelector('.quiniela_pale1')
const quinielaPale2 = document.querySelector('.quiniela_pale2')
const quinielaPale3 = document.querySelector('.quiniela_pale3')

//FECHA
const fechaqp = document.querySelector('.fecha_qp')

fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(loteria => {

            // FECHAS
          var qpfecha= data[12].FechaCorta;
          fechaqp.textContent= qpfecha;

            //QUINIELA PALE
        var qp1 = data[12].Elemento1;
        var qp2 = data[12].Elemento2;
        var qp3 = data[12].Elemento3;
      
        //NOMBRE SORTEO
        var qp_sorteo = data[12].NombreSorteo;
        var amSorteo = document.querySelector('.qp_sorteo').textContent = qp_sorteo;
        
        quinielaPale1.textContent = qp1
        quinielaPale2.textContent = qp2
        quinielaPale3.textContent = qp3

        var qpHoy = data[12].Hoy;

        if( qpHoy === 'S'){

            quinielaPale1.className ='active_bowling'
            quinielaPale2.className ='active_bowling'
            quinielaPale3.className ='active_bowling'        
        }



        });
    })