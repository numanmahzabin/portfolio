const menu = document.querySelector("#sidemenu");
const body = document.querySelector("body");

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

