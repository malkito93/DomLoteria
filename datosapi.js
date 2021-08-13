// const Api_Url = 'https://jsonplaceholder.typicode.com/posts';
const url = 'http://173.248.151.142:8025/DomLoteria/api/';
const bolo1_Nacional = document.getElementById('bolo1_nacional')
const bolo2_Nacional = document.getElementById('bolo2_nacional')
const bolo3_Nacional = document.getElementById('bolo3_nacional')
//consumir id para numeros bolos

fetch (url)
.then(res => console.log(res))
// .then(data => {
//     data.forEach(resultado => {
//         // console.log(resultado.userId)
//         // var bolos = resultado.userId 
//         // bolo1_Nacional.textContent = bolos -8;
//         // bolo2_Nacional.textContent = bolos;
//         // bolo3_Nacional.textContent = bolos -6;
//     });
    
// })
// .catch (err => console.log(err))