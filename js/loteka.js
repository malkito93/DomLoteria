const url = 'http://173.248.151.142:8025/DomLoteria/api/ResultadosHoy';

// LOTEKA 
const quinielaLoteka1 = document.getElementById('loteka1')
const quinielaLoteka2 = document.getElementById('loteka2')
const quinielaLoteka3 = document.getElementById('loteka3')

//FECHA
const fechaltk = document.querySelector('.fecha_ltk')

// console.log(quinielaLoteka1)
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(loteria => {

            // FECHAS
          var lkfecha= data[11].FechaCorta;
          fechaltk.textContent= lkfecha

            //LOTEKA
            var qlk1 = data[11].Elemento1;
            var qlk2 = data[11].Elemento2;
            var qlk3 = data[11].Elemento3;

            //NOMBRE SORTEO
        var ltk_sorteo = data[11].NombreSorteo;
        var ltkSorteo = document.querySelector('.ltk_sorteo').textContent = ltk_sorteo;
        
            quinielaLoteka1.textContent = qlk1
            quinielaLoteka2.textContent = qlk2
            quinielaLoteka3.textContent = qlk3 

            var qlkHoy = data[11].Hoy;
            if(qlkHoy === 'S'){
    
              quinielaLoteka1.className ='active_bowling'
              quinielaLoteka2.className ='active_bowling'
              quinielaLoteka3.className ='active_bowling'
  
            }
   
    
            


        });
    })