var AbrirPopup = document.getElementById('show-email-promotion'),
    emergpopup = document.getElementById('emerg-popup'),
    popup = document.getElementById('popup'),
    CerrarPopup = document.getElementById('cerrar-popup');
    
AbrirPopup.addEventListener('click', function(){
    emergpopup.classList.add('active');
});
CerrarPopup.addEventListener('click', function(){
    emergpopup.classList.remove('active');
});