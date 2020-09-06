const x = window.matchMedia("(max-width: 1400px)");
function cambiarImg(x) {
    if (x.matches) {
        // If media query matches
        document.querySelector(".svg-developer").src =
            "./css/img/Social-Network/Developer2.svg";
    } else {
        document.querySelector(".svg-developer").src =
            "./css/img/Social-Network/Developer.svg";
    }
}

cambiarImg(x); // Call listener function at run time
x.addListener(cambiarImg); // Attach listener function on state changes
