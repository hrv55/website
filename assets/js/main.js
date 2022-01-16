// main.js

// Initial.
function initial() {
    console.log("Leccia - The Theme of Jekyll.\nDesigned by Harvey Wu.");
}

// Full-screen menu for mobile.
function menuController() {
    const menu = document.querySelector(".nav-menu");
    const menuBox = document.querySelector(".nav-menu-box");
    const fullMenu = document.querySelector(".menu");
    menu.addEventListener("click", () => {
        menuBox.classList.toggle("open");
        fullMenu.classList.toggle("open");
    });
}