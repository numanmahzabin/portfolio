const menu = document.querySelector("#sidemenu");
const body = document.querySelector("body");
const navbar = document.querySelector('#navbar');
const menubar = document.querySelector('#menubar');

function openMenu(){
    menu.style.transform = 'translateX(-16rem)';
    // body.style.background = "black";
    // body.style.opacity = "0.1";
}
function closeMenu(){
    menu.style.transform = 'translateX(16rem)';
    // body.style.background = "white";
    // body.style.opacity = "1";
}

window.addEventListener('scroll',()=>{
    if(scrollY>50){
        navbar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
        menubar.classList.remove('bg-opacity-50', 'shadow-sm');
    }else{
        navbar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
        menubar.classList.add('bg-opacity-50', 'shadow-sm');

    }
})