//CARRUSEL 

window.addEventListener('load', function(){
    new Glider(document.querySelector('.body_banner'),{
        
        slidesToShow: 1,
        dots: '.indicadores',
        draggable: false,
        rewind:true,
        arrows: {
          prev: '.btn_back',
          next: '.btn_next'
        }
    });
})

var siguiente = document.querySelector('.btn_next')

setInterval (function(){
siguiente

} ,1000)