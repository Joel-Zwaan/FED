var menuButton = document.querySelector('#hamburger-menu');
var nav = document.getElementById('navigatie');

    
menuButton.addEventListener('click', toonMenu)


function toonMenu() {
    nav.classList.toggle('toon-menu');
}
var image_tracker = 'H'
function change(){
    var image = document.getElementById('menu')
    if(image_tracker=='H'){
        image.src ='images/cross.svg';
        image_tracker = 'c'
    }else{
        image.src = 'images/Hamburger.svg';
        image_tracker ='H';
    }
}