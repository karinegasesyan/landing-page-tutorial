window.onload = function() {

    // toggle header
    const btnHumbergur = document.querySelector('#btnHamberger');
    const header = document.querySelector('.header');
    const overlay = document.querySelector('.overlay');

    btnHumbergur.addEventListener("click", function(e){ 
        if(header.classList.contains('open')){ // close menu
            header.classList.remove('open');
            overlay.classList.remove('fade-in');
            overlay.classList.add('fade-out');
        }else{
            header.classList.add('open');
            overlay.classList.remove('fade-out');
            overlay.classList.add('fade-in');
        }   
     });



};

    
    
