"use strict";var navWrapper=document.querySelector(".nav-wrapper"),navLogo=document.querySelector(".nav-logo");window.addEventListener("resize",(function(){window.innerWidth<992?navLogo.classList.remove("show"):window.innerWidth>=992&&0===window.scrollY&&(navWrapper.classList.remove("show"),navLogo.classList.add("show"))})),window.addEventListener("scroll",(function(){window.innerWidth>=992&&window.scrollY>50?(navWrapper.classList.add("show"),navLogo.classList.add("show")):window.innerWidth>=992&&window.scrollY<100&&(navWrapper.classList.remove("show"),navLogo.classList.remove("show"))}));