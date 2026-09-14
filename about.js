// ========================================
// ABOUT PAGE ANIMATIONS
// ========================================

window.addEventListener("load", () => {

    gsap.registerPlugin(ScrollTrigger);


    // HERO
    gsap.from(".about-hero > div", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });


    // VISION
    gsap.from(".vision-content", {
        scrollTrigger: {
            trigger: ".vision-section",
            start: "top 80%",
            once: true
        },

        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",

        immediateRender: false
    });


    // APPROACH ITEMS
    gsap.from(".approach-item", {
        scrollTrigger: {
            trigger: ".approach-section",
            start: "top 85%",
            once: true
        },

        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",

        immediateRender: false
    });


    // CTA
    gsap.from(".about-cta", {
        scrollTrigger: {
            trigger: ".about-cta",
            start: "top 85%",
            once: true
        },

        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",

        immediateRender: false
    });

});