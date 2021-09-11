// Historial Loteria
var url2 = 'http://173.248.151.142:8025/DomLoteria/api/HistoricoSorteos/1/1'
var bolo1 = document.querySelector('.h1')
var bolo2 = document.querySelector('.h2')
var bolo3 = document.querySelector('.h3')

var bolos = document.querySelector('.quiniela_bowling')
var fechab = document.querySelector('.date')

fetch(url2)
.then(res => res.json())
.then(data => {
  data.forEach(historial => {
    console.log(historial.Sorteos)
    
    for (let i = 0; i < 30; i++) {
      var fecha = historial.Sorteos[i].FechaCorta;
      var resultados = historial.Sorteos[i].Resultados;
     
      const p = document.createElement('p')
      p.innerHTML =  ` ${fecha}` 
      fechab.appendChild(p)
      
    }
    
    // for(var i=0; i<30; i++){
      
       
    //   
      
    //   console.log(fecha)
    //   console.log(resultados)
    //   fechab.innerHTML = `<p> ${fecha}</p> <br/>`;
    //   bolos.textContent = resultados;
    // }
    
    // bolo1.textContent = data[0].Sorteos[1].Elemento1;
    // bolo2.textContent = data[0].Sorteos[1].Elemento2;
    // bolo3.textContent = data[0].Sorteos[1].Elemento3;
    
   
    
  })
})
