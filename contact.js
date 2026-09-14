// ========================================
// CONTACT PAGE ANIMATION
// ========================================

window.addEventListener("load", () => {

    gsap.registerPlugin(ScrollTrigger);

    // Hero

    gsap.from(".contact-hero > *", {

        y: 50,

        opacity: 0,

        duration: 1,

        stagger: 0.15,

        ease: "power3.out"

    });


    // Form

    gsap.from(".contact-form", {

        scrollTrigger: {

            trigger: ".contact-area",

            start: "top 80%",

            once: true

        },

        x: -60,

        opacity: 0,

        duration: 0.9,

        ease: "power3.out"

    });


    // Contact info

    gsap.from(".contact-info", {

        scrollTrigger: {

            trigger: ".contact-area",

            start: "top 80%",

            once: true

        },

        x: 60,

        opacity: 0,

        duration: 0.9,

        ease: "power3.out"

    });

});