// main.js

function tips() {
    console.log("*****************************");
    console.log("Orata - The Theme of Jekyll.");
    console.log("Designed by Harvey Wu.");
    console.log("*****************************");
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

// Works slider animation.
function worksSliderAnimationController() {
    const worksList = document.querySelector(".works-items-list");
    const worksItem = document.querySelector(".works-items-item");

    worksList.appendChild(worksItem);
    worksList.animate(
        [{
            left: "-" + worksItem.clientWidth+"px"
        }], {
            easing: ['ease']
        }, 3000,
        function () {
            worksList.appendChild(worksItem.firstChild);
            worksList.style.left = "";
        }
    );
}