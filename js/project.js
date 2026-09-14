// ========================================
// PROJECTS PAGE ANIMATION
// ========================================

window.addEventListener("load", () => {

    gsap.registerPlugin(ScrollTrigger);

    // Hero
    gsap.from(".projects-hero > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
    });


    // Project cards
    gsap.from(".project-card", {

        scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
            once: true
        },

        y: 60,

        opacity: 0,

        duration: 0.8,

        stagger: 0.15,

        ease: "power3.out"

    });


    // CTA
    gsap.from(".projects-cta", {

        scrollTrigger: {
            trigger: ".projects-cta",
            start: "top 85%",
            once: true
        },

        y: 50,

        opacity: 0,

        duration: 0.8,

        ease: "power3.out"

    });

});
