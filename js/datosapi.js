// const Api_Url = 'https://jsonplaceholder.typicode.com/posts';
const url = 'http://173.248.151.142:8025/DomLoteria/api/ResultadosHoy';

        // QUINIELA PALE
        const quinielaPale1 = document.querySelectorAll('.quiniela_pale1')
        const quinielaPale2 = document.querySelectorAll('.quiniela_pale2')
        const quinielaPale3 = document.querySelectorAll('.quiniela_pale3')

        // NACIONAL TARDE
        const nacionalTarde1 = document.querySelectorAll('.nacional_tarde1')
        const nacionalTarde2 = document.querySelectorAll('.nacional_tarde2')
        const nacionalTarde3 = document.querySelectorAll('.nacional_tarde3')

        //ANGUILLA MANANA 
        const anguillaManana1 = document.querySelectorAll('.anguilla_mañana1')
        const anguillaManana2 = document.querySelectorAll('.anguilla_mañana2')
        const anguillaManana3 = document.querySelectorAll('.anguilla_mañana3')

        //ANGUILLA DIA 
        const anguillaDia1 = document.querySelectorAll('.anguilla_dia1')
        const anguillaDia2 = document.querySelectorAll('.anguilla_dia2')
        const anguillaDia3 = document.querySelectorAll('.anguilla_dia3')

        //LA PRIMERA
        const laPrimera1 = document.querySelectorAll('.la_primera1')
        const laPrimera2 = document.querySelectorAll('.la_primera2')
        const laPrimera3 = document.querySelectorAll('.la_primera3')

        //LA SUERTE
        const laSuerte1 = document.querySelectorAll('.la_suerte1')
        const laSuerte2 = document.querySelectorAll('.la_suerte2')
        const laSuerte3 = document.querySelectorAll('.la_suerte3')
         
        // QUINIELA REAL
        const quinielaReal1 = document.querySelectorAll('.quiniela_real1')
        const quinielaReal2 = document.querySelectorAll('.quiniela_real2')
        const quinielaReal3 = document.querySelectorAll('.quiniela_real3')

         // FLORIDA DIA
         const floridaDia1 = document.querySelectorAll('.florida_dia1')
         const floridaDia2 = document.querySelectorAll('.florida_dia2')
         const floridaDia3 = document.querySelectorAll('.florida_dia3')

         // NEW YORK DIA
         const newYorkDia1 = document.querySelectorAll('.new_york_dia1')
         const newYorkDia2 = document.querySelectorAll('.new_york_dia2')
         const newYorkDia3 = document.querySelectorAll('.new_york_dia3')

         // LOTEDOM
         const lotedom1 = document.querySelectorAll('.lotedom1')
         const lotedom2 = document.querySelectorAll('.lotedom2')
         const lotedom3 = document.querySelectorAll('.lotedom3')

         // ANGUILLA TARDE
         const anguillaTarde1 = document.querySelectorAll('.anguilla_tarde1')
         const anguillaTarde2 = document.querySelectorAll('.anguilla_tarde2')
         const anguillaTarde3 = document.querySelectorAll('.anguilla_tarde3')

         // NACIONAL NOCHE
         const nacionalNoche1 = document.querySelectorAll('.nacional_noche1')
         const nacionalNoche2 = document.querySelectorAll('.nacional_noche2')
         const nacionalNoche3 = document.querySelectorAll('.nacional_noche3')

         // QUINIELA LOTEKA
         const quinielaLoteka1 = document.querySelectorAll('.loteka1')
         const quinielaLoteka2 = document.querySelectorAll('.loteka2')
         const quinielaLoteka3 = document.querySelectorAll('.loteka3')

         // ANGUILLA NOCHE
         const anguillaNoche1 = document.querySelectorAll('.anguilla_noche1')
         const anguillaNoche2 = document.querySelectorAll('.anguilla_noche2')
         const anguillaNoche3 = document.querySelectorAll('.anguilla_noche3')

         // FLORIDA NOCHE
         const floridaNoche1 = document.querySelectorAll('.florida_noche1')
         const floridaNoche2 = document.querySelectorAll('.florida_noche2')
         const floridaNoche3 = document.querySelectorAll('.florida_noche3')

         // NEW YORK NOCHE
         const newYorkNoche1 = document.querySelectorAll('.new_york_noche1')
         const newYorkNoche2 = document.querySelectorAll('.new_york_noche2')
         const newYorkNoche3 = document.querySelectorAll('.new_york_noche3')



fetch (url)
.then(res => res.json())
.then(data => {
    data.forEach(loteria => {

        //  NACIONAL TARDE
        var nt1 = data[0].Sorteos[0].Elemento1;
        var nt2 = data[0].Sorteos[0].Elemento2;
        var nt3 = data[0].Sorteos[0].Elemento3;

        nacionalTarde1[0].textContent = nt1
        nacionalTarde2[0].textContent = nt2
        nacionalTarde3[0].textContent = nt3

        var qpHoy = data[0].Sorteos[0].Hoy;

        if( qpHoy === 'S'){

            nacionalTarde1[0].className ='active_bowling'
            nacionalTarde2[0].className ='active_bowling'
            nacionalTarde3[0].className ='active_bowling'
          
        }

        //QUINIELA PALE
        var qp1 = data[1].Sorteos[0].Elemento1;
        var qp2 = data[1].Sorteos[0].Elemento2;
        var qp3 = data[1].Sorteos[0].Elemento3;

        quinielaPale1[0].textContent = qp1
        quinielaPale2[0].textContent = qp2
        quinielaPale3[0].textContent = qp3

        quinielaPale1[1].textContent = qp1
        quinielaPale2[1].textContent = qp2
        quinielaPale3[1].textContent = qp3

        var qpHoy = data[0].Sorteos[0].Hoy;

        if( qpHoy === 'S'){

            quinielaPale1[0].className ='active_bowling'
            quinielaPale2[0].className ='active_bowling'
            quinielaPale3[0].className ='active_bowling'

            quinielaPale1[1].className ='active_bowling'
            quinielaPale2[1].className ='active_bowling'
            quinielaPale3[1].className ='active_bowling'          
        }

        // ANGUILLA MANANA
        var am1 = data[8].Sorteos[0].Elemento1;
        var am2 = data[8].Sorteos[0].Elemento2;
        var am3 = data[8].Sorteos[0].Elemento3;

        var amHoy = data[8].Sorteos[0].Hoy;

        if(amHoy === 'S'){

            anguillaManana1[0].className ='active_bowling'
            anguillaManana2[0].className ='active_bowling'
            anguillaManana3[0].className ='active_bowling'
        }
        
        anguillaManana1[0].textContent = am1
        anguillaManana2[0].textContent = am2
        anguillaManana3[0].textContent = am3

        anguillaManana1[1].textContent = am1
        anguillaManana2[1].textContent = am2
        anguillaManana3[1].textContent = am3


        // LA PRIMERA

        var lp1 = data[5].Sorteos[0].Elemento1;
        var lp2 = data[5].Sorteos[0].Elemento2;
        var lp3 = data[5].Sorteos[0].Elemento3;

        var lpHoy = data[5].Sorteos[0].Hoy;
        // console.log(amHoy)

        if(lpHoy === 'S'){

            laPrimera1[0].className ='active_bowling'
            laPrimera2[0].className ='active_bowling'
            laPrimera3[0].className ='active_bowling'
        }
        
        laPrimera1[0].textContent = lp1
        laPrimera2[0].textContent = lp2
        laPrimera3[0].textContent = lp3

        laPrimera1[1].textContent = lp1
        laPrimera2[1].textContent = lp2
        laPrimera3[1].textContent = lp3

         // LA SUERTE
        var ls1 = data[6].Sorteos[0].Elemento1;
        var ls2 = data[6].Sorteos[0].Elemento2;
        var ls3 = data[6].Sorteos[0].Elemento3;

        var lsHoy = data[5].Sorteos[0].Hoy;
        // console.log(lsHoy)

        if(lsHoy === 'S'){

            laSuerte1[0].className ='active_bowling'
            laSuerte2[0].className ='active_bowling'
            laSuerte3[0].className ='active_bowling'

            laSuerte1[1].className ='active_bowling'
            laSuerte2[1].className ='active_bowling'
            laSuerte3[1].className ='active_bowling'
        }
        
        laSuerte1[0].textContent = ls1
        laSuerte2[0].textContent = ls2
        laSuerte3[0].textContent = ls3

        laSuerte1[1].textContent = ls1
        laSuerte2[1].textContent = ls2
        laSuerte3[1].textContent = ls3

         // ANGUILLA DIA
         var ad1 = data[8].Sorteos[1].Elemento1;
         var ad2 = data[8].Sorteos[1].Elemento2;
         var ad3 = data[8].Sorteos[1].Elemento3;
 
         var adHoy = data[8].Sorteos[1].Hoy;
 
         if(adHoy === 'S'){
 
             anguillaDia1[0].className ='active_bowling'
             anguillaDia2[0].className ='active_bowling'
             anguillaDia3[0].className ='active_bowling'
 
             anguillaDia1[1].className ='active_bowling'
             anguillaDia2[1].className ='active_bowling'
             anguillaDia3[1].className ='active_bowling'
         }
         
         anguillaDia1[0].textContent = ad1
         anguillaDia2[0].textContent = ad2
         anguillaDia3[0].textContent = ad3
 
         anguillaDia1[1].textContent = ad1
         anguillaDia2[1].textContent = ad2
         anguillaDia3[1].textContent = ad3

         // QUINIELA REAL 
         var qr1 = data[3].Sorteos[0].Elemento1;
         var qr2 = data[3].Sorteos[0].Elemento2;
         var qr3 = data[3].Sorteos[0].Elemento3;
 
         var qrHoy = data[3].Sorteos[0].Hoy;
         if(qrHoy === 'S'){
 
             quinielaReal1[0].className ='active_bowling'
             quinielaReal2[0].className ='active_bowling'
             quinielaReal3[0].className ='active_bowling'

             quinielaReal1[1].className ='active_bowling'
             quinielaReal2[1].className ='active_bowling'
             quinielaReal3[1].className ='active_bowling'
         }

         quinielaReal1[0].textContent = qr1
         quinielaReal2[0].textContent = qr2
         quinielaReal3[0].textContent = qr3 

         quinielaReal1[1].textContent = qr1
         quinielaReal2[1].textContent = qr2
         quinielaReal3[1].textContent = qr3 

          // FLORIDA DIA 
          var fd1 = data[7].Sorteos[2].Elemento1;
          var fd2 = data[7].Sorteos[2].Elemento2;
          var fd3 = data[7].Sorteos[2].Elemento3;
  
          var fdHoy = data[7].Sorteos[2].Hoy;
          if(fdHoy === 'S'){
  
              floridaDia1[0].className ='active_bowling'
              floridaDia2[0].className ='active_bowling'
              floridaDia3[0].className ='active_bowling'
 
              floridaDia1[1].className ='active_bowling'
              floridaDia2[1].className ='active_bowling'
              floridaDia3[1].className ='active_bowling'
          }
 
          floridaDia1[0].textContent = fd1
          floridaDia2[0].textContent = fd2
          floridaDia3[0].textContent = fd3 
 
          floridaDia1[1].textContent = fd1
          floridaDia2[1].textContent = fd2
          floridaDia3[1].textContent = fd3 
              
          // NEW YORK DIA 
          var nyd1 = data[7].Sorteos[0].Elemento1;
          var nyd2 = data[7].Sorteos[0].Elemento2;
          var nyd3 = data[7].Sorteos[0].Elemento3;
  
          var nydHoy = data[7].Sorteos[0].Hoy;
          if(nydHoy === 'S'){
  
            newYorkDia1[0].className ='active_bowling'
            newYorkDia2[0].className ='active_bowling'
            newYorkDia3[0].className ='active_bowling'

            newYorkDia1[1].className ='active_bowling'
            newYorkDia2[1].className ='active_bowling'
            newYorkDia3[1].className ='active_bowling'
          }
 
          newYorkDia1[0].textContent = nyd1
          newYorkDia2[0].textContent = nyd2
          newYorkDia3[0].textContent = nyd3 
 
          newYorkDia1[1].textContent = nyd1
          newYorkDia2[1].textContent = nyd2
          newYorkDia3[1].textContent = nyd3 
              
         
          // LOTEDOM 
          var ld1 = data[5].Sorteos[1].Elemento1;
          var ld2 = data[5].Sorteos[1].Elemento2;
          var ld3 = data[5].Sorteos[1].Elemento3;
  
          var ldHoy = data[5].Sorteos[1].Hoy;
          if(ldHoy === 'S'){
  
            lotedom1[0].className ='active_bowling'
            lotedom2[0].className ='active_bowling'
            lotedom3[0].className ='active_bowling'

            lotedom1[1].className ='active_bowling'
            lotedom2[1].className ='active_bowling'
            lotedom3[1].className ='active_bowling'
          }
 
          lotedom1[0].textContent = ld1
          lotedom2[0].textContent = ld2
          lotedom3[0].textContent = ld3 
 
          lotedom1[1].textContent = ld1
          lotedom2[1].textContent = ld2
          lotedom3[1].textContent = ld3 
              
         
          // ANGUILLA TARDE 
          var at1 = data[8].Sorteos[2].Elemento1;
          var at2 = data[8].Sorteos[2].Elemento2;
          var at3 = data[8].Sorteos[2].Elemento3;
  
          var atHoy = data[8].Sorteos[2].Hoy;
          if(atHoy === 'S'){
  
            anguillaTarde1[0].className ='active_bowling'
            anguillaTarde2[0].className ='active_bowling'
            anguillaTarde3[0].className ='active_bowling'

            anguillaTarde1[1].className ='active_bowling'
            anguillaTarde2[1].className ='active_bowling'
            anguillaTarde3[1].className ='active_bowling'
          }
 
          anguillaTarde1[0].textContent = at1
          anguillaTarde2[0].textContent = at2
          anguillaTarde3[0].textContent = at3 
 
          anguillaTarde1[1].textContent = at1
          anguillaTarde2[1].textContent = at2
          anguillaTarde3[1].textContent = at3 
              
          // NACIONAL NOCHE  
          var nn1 = data[0].Sorteos[1].Elemento1;
          var nn2 = data[0].Sorteos[1].Elemento2;
          var nn3 = data[0].Sorteos[1].Elemento3;
  
          var nnHoy = data[0].Sorteos[1].Hoy;
          if(nnHoy === 'S'){
  
            nacionalNoche1[0].className ='active_bowling'
            nacionalNoche2[0].className ='active_bowling'
            nacionalNoche3[0].className ='active_bowling'

            nacionalNoche1[1].className ='active_bowling'
            nacionalNoche2[1].className ='active_bowling'
            nacionalNoche3[1].className ='active_bowling'
          }
 
          nacionalNoche1[0].textContent = nn1
          nacionalNoche2[0].textContent = nn2
          nacionalNoche3[0].textContent = nn3 
 
          nacionalNoche1[1].textContent = nn1
          nacionalNoche2[1].textContent = nn2
          nacionalNoche3[1].textContent = nn3 
              
         
          // LOTEKA 
          var qlk1 = data[2].Sorteos[0].Elemento1;
          var qlk2 = data[2].Sorteos[0].Elemento2;
          var qlk3 = data[2].Sorteos[0].Elemento3;
  
          var qlkHoy = data[2].Sorteos[0].Hoy;
          if(qlkHoy === 'S'){
  
            quinielaLoteka1[0].className ='active_bowling'
            quinielaLoteka2[0].className ='active_bowling'
            quinielaLoteka3[0].className ='active_bowling'

            quinielaLoteka1[1].className ='active_bowling'
            quinielaLoteka2[1].className ='active_bowling'
            quinielaLoteka3[1].className ='active_bowling'
          }
 
          quinielaLoteka1[0].textContent = qlk1
          quinielaLoteka2[0].textContent = qlk2
          quinielaLoteka3[0].textContent = qlk3 
 
          quinielaLoteka1[1].textContent = qlk1
          quinielaLoteka2[1].textContent = qlk2
          quinielaLoteka3[1].textContent = qlk3 
          
          // ANGUILLA NOCHE  
          var an1 = data[8].Sorteos[3].Elemento1;
          var an2 = data[8].Sorteos[3].Elemento2;
          var an3 = data[8].Sorteos[3].Elemento3;
  
          var anHoy = data[8].Sorteos[3].Hoy;
          if(anHoy === 'S'){
  
            anguillaNoche1[0].className ='active_bowling'
            anguillaNoche2[0].className ='active_bowling'
            anguillaNoche3[0].className ='active_bowling'

            anguillaNoche1[1].className ='active_bowling'
            anguillaNoche2[1].className ='active_bowling'
            anguillaNoche3[1].className ='active_bowling'
          }
 
          anguillaNoche1[0].textContent = an1
          anguillaNoche2[0].textContent = an2
          anguillaNoche3[0].textContent = an3 
 
          anguillaNoche1[1].textContent = an1
          anguillaNoche2[1].textContent = an2
          anguillaNoche3[1].textContent = an3 
              
         
          // FLORIDA NOCHE
          var fn1 = data[7].Sorteos[3].Elemento1;
          var fn2 = data[7].Sorteos[3].Elemento2;
          var fn3 = data[7].Sorteos[3].Elemento3;
  
          var fnHoy = data[7].Sorteos[3].Hoy;
          if(fnHoy === 'S'){
  
            floridaNoche1[0].className ='active_bowling'
            floridaNoche2[0].className ='active_bowling'
            floridaNoche3[0].className ='active_bowling'

            floridaNoche1[1].className ='active_bowling'
            floridaNoche2[1].className ='active_bowling'
            floridaNoche3[1].className ='active_bowling'
          }
 
          floridaNoche1[0].textContent = fn1
          floridaNoche2[0].textContent = fn2
          floridaNoche3[0].textContent = fn3 
 
          floridaNoche1[1].textContent = fn1
          floridaNoche2[1].textContent = fn2
          floridaNoche3[1].textContent = fn3 
              
          // NEW YORK NOCHE 
          var nyn1 = data[7].Sorteos[1].Elemento1;
          var nyn2 = data[7].Sorteos[1].Elemento2;
          var nyn3 = data[7].Sorteos[1].Elemento3;
  
          var nynHoy = data[7].Sorteos[1].Hoy;
          if(nynHoy === 'S'){
  
            newYorkNoche1[0].className ='active_bowling'
            newYorkNoche2[0].className ='active_bowling'
            newYorkNoche3[0].className ='active_bowling'

            newYorkNoche1[1].className ='active_bowling'
            newYorkNoche2[1].className ='active_bowling'
            newYorkNoche3[1].className ='active_bowling'
          }
 
          newYorkNoche1[0].textContent = nyn1
          newYorkNoche2[0].textContent = nyn2
          newYorkNoche3[0].textContent = nyn3 
 
          newYorkNoche1[1].textContent = nyn1
          newYorkNoche2[1].textContent = nyn2
          newYorkNoche3[1].textContent = nyn3 
              
         
          console.log(data)
    });
})
.catch(err => console.log(err))



//     data.forEach(resultado => {
//         // console.log(resultado.userId)
//         // var bolos = resultado.userId 
//         // bolo1_Nacional.textContent = bolos -8;
//         // bolo2_Nacional.textContent = bolos;
//         // bolo3_Nacional.textContent = bolos -6;
//     });
    
// })
// .catch (err => console.log(err))