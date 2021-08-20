const url = 'http://173.248.151.142:8025/DomLoteria/api/ResultadosHoy';

// LOTEKA 
const quinielaLoteka1 = document.getElementById('loteka1')
const quinielaLoteka2 = document.getElementById('loteka2')
const quinielaLoteka3 = document.getElementById('loteka3')

// console.log(quinielaLoteka1)
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(loteria => {

            //LOTEKA
            var qlk1 = data[2].Sorteos[0].Elemento1;
            var qlk2 = data[2].Sorteos[0].Elemento2;
            var qlk3 = data[2].Sorteos[0].Elemento3;

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