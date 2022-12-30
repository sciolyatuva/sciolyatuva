function hamOpen(x, b) {
    x.className = "hamburger-menu-open";
    b.className = "fa-solid fa-times";
}

function hamClose(x, b) {
    x.className = "hamburger-menu";
    b.className = "fa-solid fa-bars";
}

function hamburger() {
    var x = document.getElementById("hamburger-menu");
    var b = document.getElementById("menu-toggle").getElementsByClassName("fa-solid")[0];
    if (x.className === "hamburger-menu") {
        hamOpen(x, b);
    } else {
        hamClose(x, b);
    }
}

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function hamburgerMenuResize() {
    var x = document.getElementById("hamburger-menu");
    var b = document.getElementById("menu-toggle").getElementsByClassName("fa-solid")[0];
    if (window.innerWidth >= convertRemToPixels(56)) {
        hamClose(x, b);
    }
}

window.addEventListener('resize', hamburgerMenuResize);
