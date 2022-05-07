// Selectors

const getSidebar = document.querySelector(".nav-sidebar ul");
const getMainMenuBtn = document.getElementById("btn");
const getMenubtn = document.querySelector("ul");
const getBody = document.querySelector(".body-style");
const getHomeButton = document.querySelector(".button-home");
const getRedButton = document.querySelector(".button-red");
const getOrangeButton = document.querySelector(".button-orange");
const getPurpleButton = document.querySelector(".button-purple");
const getGreenButton = document.querySelector(".button-green");

// Menu toggle functions

// const toggleMenu = function () {
//     if (getSidebar.style.visibility === "visible") {
//         getSidebar.style.visibility = "hidden";
//     } else {
//         getSidebar.style.visibility = "visible";
//     }
// }

// const hideMenu = function () {
//     getSidebar.style.visibility = "hidden";
// }

// Menu slide functions

const toggleMenu = function () {
    if (getSidebar.style.transform === "translate(0px)") {
        getSidebar.style.transform = "translate(-333px)";
    } else {
        getSidebar.style.transform = "translate(0px)";
    }
}

const hideMenu = function () {
    getSidebar.style.transform = "translate(-333px)";
}

// Color toggle functions

const homeBackground = function () {
    getBody.style.backgroundColor = "lightgray";
}

const redBackground = function () {
    getBody.style.backgroundColor = "red";
}

const orangeBackground = function () {
    getBody.style.backgroundColor = "orange";
}

const purpleBackground = function () {
    getBody.style.backgroundColor = "purple";
}

const greenBackground = function () {
    getBody.style.backgroundColor = "green";
}

// mouse actions

getMainMenuBtn.addEventListener("click", toggleMenu);
getMenubtn.addEventListener("click", hideMenu);
getHomeButton.addEventListener("click", homeBackground);
getRedButton.addEventListener("click", redBackground);
getOrangeButton.addEventListener("click", orangeBackground);
getPurpleButton.addEventListener("click", purpleBackground);
getGreenButton.addEventListener("click", greenBackground);

// keyboard actions

document.addEventListener("keydown", function (event) {
    if (event.key === "1") {
        return homeBackground();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "2") {
        return redBackground();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "3") {
        return orangeBackground();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "4") {
        return purpleBackground();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "5") {
        return greenBackground();
    }
});