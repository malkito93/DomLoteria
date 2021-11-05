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

            //LOTEKA
            var qlk1 = data[2].Sorteos[0].Elemento1;
            var qlk2 = data[2].Sorteos[0].Elemento2;
            var qlk3 = data[2].Sorteos[0].Elemento3;

            //NOMBRE SORTEO
        var ltk_sorteo = data[2].Sorteos[0].NombreSorteo;
        var ltkSorteo = document.querySelector('.ltk_sorteo').textContent = ltk_sorteo;
        
            quinielaLoteka1.textContent = qlk1
            quinielaLoteka2.textContent = qlk2
            quinielaLoteka3.textContent = qlk3 

            var qlkHoy = data[2].Sorteos[0].Hoy;
            if(qlkHoy === 'S'){
    
              quinielaLoteka1.className ='active_bowling'
              quinielaLoteka2.className ='active_bowling'
              quinielaLoteka3.className ='active_bowling'
  
            }
   
    
            


        });
    })