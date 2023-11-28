document.addEventListener("DOMContentLoaded", function() {
    // Tu código aquí
    const botonMenu = document.querySelector("#boton-menu");
    const menu = document.querySelector("#menu");
    const header = document.querySelector("#header");

    botonMenu.addEventListener("click", () => {
        if (menu.classList.contains("visible")) {
            menu.classList.remove("visible");
            menu.classList.add("invisible");
            header.classList.remove("visible");
            header.classList.add("invisible");
        } 
        else {
            menu.classList.remove("invisible");
            menu.classList.add("visible");
            header.classList.remove("invisible");
            header.classList.add("visible");
        }
    });
});
