window.onload = function() {

    // toggle header
    const btnHumbergur = document.querySelector('#btnHamberger');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
   // const overlay = document.querySelector('.overlay');
    const hasFade = document.querySelectorAll('.has-fade');

    btnHumbergur.addEventListener("click", function(e){ 
        if(header.classList.contains('open')){ // close menu
            body.classList.remove('noscroll');
            header.classList.remove('open');
            hasFade.forEach(function(el){
                el.classList.remove('fade-in');
                el.classList.add('fade-out');
            });
            
        }else{
            body.classList.add('noscroll');
            header.classList.add('open');
            hasFade.forEach(function(el){
                el.classList.remove('fade-out');
                el.classList.add('fade-in');
            });

        }   
     });



};

    
    
