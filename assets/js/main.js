// main.js

function tips() {
    console.log("*****************************\nOrata - The Theme of Jekyll.\nDesigned by Harvey Wu.\n*****************************");
}

// Full screen menu.
function fullMenuController() {
    const menu = document.querySelector(".nav-menu");
    const menuBox = document.querySelector(".nav-menu-box");
    const fullMenu = document.querySelector(".fullmenu");
    menu.addEventListener("click", () => {
        menuBox.classList.toggle("open");
        fullMenu.classList.toggle("open");
    });
}

// Secret Launcher.
function secretLauncher() {
    const content = document.querySelector(".plakat-title-content");
    const show = document.querySelector(".secret-dialog");
    content.addEventListener("click", () => {
        alert("Hi!");
    });
}

// Works slider animation.
function worksSliderAnimationController() {
    const worksList = document.querySelector(".works-items-list");
    const worksItem = document.querySelector(".works-items-item");

    worksList.appendChild(worksItem);
    worksList.animate(
        [{
            left: "-" + worksItem.clientWidth + "px"
        }], {
            easing: ['ease']
        }, 3000,
        function () {
            worksList.appendChild(worksItem.firstChild);
            worksList.style.left = "";
        }
    );
}