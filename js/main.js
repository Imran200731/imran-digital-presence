// ========================================
// GSAP HERO ANIMATION
// ========================================

window.addEventListener("load", () => {

    const eyebrow = document.querySelector(".eyebrow");
    const heading = document.querySelector(".hero h1");
    const description = document.querySelector(".hero-description");
    const buttons = document.querySelector(".hero-buttons");
    const navbar = document.querySelector(".navbar");

    // Hide elements before animation
    gsap.set(navbar, {
        y: -30,
        opacity: 0
    });

    gsap.set(eyebrow, {
        y: 30,
        opacity: 0
    });

    gsap.set(heading, {
        y: 60,
        opacity: 0
    });

    gsap.set(description, {
        y: 30,
        opacity: 0
    });

    gsap.set(buttons, {
        y: 30,
        opacity: 0
    });


    // Create entrance timeline
    const timeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


    timeline
        .to(navbar, {
            y: 0,
            opacity: 1,
            duration: 0.8
        })

        .to(eyebrow, {
            y: 0,
            opacity: 1,
            duration: 0.7
        }, "-=0.4")

        .to(heading, {
            y: 0,
            opacity: 1,
            duration: 1
        }, "-=0.4")

        .to(description, {
            y: 0,
            opacity: 1,
            duration: 0.7
        }, "-=0.5")

        .to(buttons, {
            y: 0,
            opacity: 1,
            duration: 0.7
        }, "-=0.4");

});
// ========================================
// SERVICE CARD SCROLL ANIMATION
// ========================================

gsap.registerPlugin(ScrollTrigger);

gsap.from(".service-card", {
    scrollTrigger: {
        trigger: ".services-preview",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },

    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});
