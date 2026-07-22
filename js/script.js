/*======================================
JEN CROSK COACHING
SCRIPT.JS
======================================*/



/*======================================
ELEMENTS
======================================*/

const navbar = document.querySelector(".navbar");

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");

const faqItems = document.querySelectorAll(".faq-item");

const testimonials = document.querySelectorAll(".testimonial");



/*======================================
STICKY NAVBAR
======================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/*======================================
MOBILE MENU
======================================*/

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active");

});



/*======================================
CLOSE MENU
======================================*/

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.classList.remove("active");

    });

});



/*======================================
SMOOTH SCROLL
======================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});



/*======================================
TESTIMONIAL SLIDER
======================================*/

let currentSlide = 0;

function showTestimonials(){

    testimonials.forEach((card,index)=>{

        card.style.opacity = index === currentSlide ? "1" : ".35";

        card.style.transform = index === currentSlide
        ? "scale(1)"
        : "scale(.96)";

    });

}

if(testimonials.length){

    showTestimonials();

    setInterval(()=>{

        currentSlide++;

        if(currentSlide >= testimonials.length){

            currentSlide = 0;

        }

        showTestimonials();

    },5000);

}



/*======================================
FAQ
======================================*/

faqItems.forEach(item=>{

    const question = item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        item.classList.toggle("open");

    });

});



/*======================================
ACTIVE NAV LINK
======================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



/*======================================
BUTTON RIPPLE
======================================*/

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-3px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});



/*======================================
IMAGE PARALLAX
======================================*/

window.addEventListener("scroll",()=>{

    const hero = document.querySelector(".hero");

    if(!hero) return;

    hero.style.backgroundPositionY = `${window.pageYOffset * 0.35}px`;

});



/*======================================
SERVICE CARD HOVER
======================================*/

document.querySelectorAll(".service-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});



/*======================================
PRELOADER FADE
======================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});



/*======================================
SCROLL TO TOP
======================================*/

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/*======================================
END
======================================*/
