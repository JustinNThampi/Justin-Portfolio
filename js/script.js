console.log("Portfolio Loaded Successfully!");

const menuIcon = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");


if (menuIcon) {

    menuIcon.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const trigger = window.innerHeight * 0.8;

    reveals.forEach((section) => {

        const top = section.getBoundingClientRect().top;
        const bottom = section.getBoundingClientRect().bottom;

        if (top < trigger && bottom > 0) {

            section.classList.add("active");

        } else {

            section.classList.remove("active");

        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();