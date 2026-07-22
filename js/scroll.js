/*======================================
SCROLL ANIMATIONS
======================================*/

const reveals = document.querySelectorAll(
".about,.services,.why,.testimonials,.contact,.service-card,.testimonial,.about-image,.why-image,.section-title"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:.15
});

reveals.forEach(item=>{

    item.classList.add("reveal");

    observer.observe(item);

});



/*======================================
STAGGER SERVICE CARDS
======================================*/

const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            serviceCards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.classList.add("active");

                },index*180);

            });

        }

    });

},{
    threshold:.25
});

if(serviceCards.length){

    serviceObserver.observe(serviceCards[0]);

}



/*======================================
STAGGER TESTIMONIALS
======================================*/

const testimonialCards = document.querySelectorAll(".testimonial");

const testimonialObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            testimonialCards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.classList.add("active");

                },index*180);

            });

        }

    });

},{
    threshold:.25
});

if(testimonialCards.length){

    testimonialObserver.observe(testimonialCards[0]);

}



/*======================================
PARALLAX IMAGES
======================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const offset = window.pageYOffset;

    if(hero){

        hero.style.backgroundPositionY = `${offset * 0.35}px`;

    }

});



/*======================================
SECTION FADE
======================================*/

document.querySelectorAll("section").forEach(section=>{

    section.style.transition="opacity .8s ease, transform .8s ease";

});



/*======================================
ACTIVE NAVIGATION
======================================*/

const sections = document.querySelectorAll("section");

const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 180;

        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navigationLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



/*======================================
IMAGE ZOOM ON SCROLL
======================================*/

const images = document.querySelectorAll(".about-image,.why-image");

window.addEventListener("scroll",()=>{

    images.forEach(image=>{

        const rect = image.getBoundingClientRect();

        const visible = 1 - Math.abs(rect.top / window.innerHeight);

        const scale = 1 + (visible * 0.03);

        image.style.transform = `scale(${Math.max(1,scale)})`;

    });

});



/*======================================
HEADER FADE
======================================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});



/*======================================
SMOOTH SECTION ENTRANCE
======================================*/

const sectionObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate([

                {
                    opacity:0,
                    transform:"translateY(50px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0px)"
                }

            ],{

                duration:800,
                easing:"ease-out",
                fill:"forwards"

            });

        }

    });

},{
    threshold:.2
});

document.querySelectorAll("section").forEach(section=>{

    sectionObserver.observe(section);

});



/*======================================
END
======================================*/
