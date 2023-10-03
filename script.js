
const header = document.querySelector('.header');
const menu = document.querySelector('.menu-icons');

// Toggle Menu

const mobile_menu = () => {
    header.classList.toggle('active');
}
menu.addEventListener('click',()=>mobile_menu());

function loco()
{
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
loco();

gsap.to(".navbar-links",{
    transform:"translateY(-100%)",
    opacity:"0",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top 0",
        end:"top -5%",
        scrub:true,
    }
})

function videoAnimation(){
    var video = document.querySelector(".video-container");
    var play = document.querySelector("#play");

video.addEventListener("mouseenter",()=>{
    gsap.to("#play",{
        opacity:1,
        scale:1,
    })
})

video.addEventListener("mouseleave",()=>{
    gsap.to("#play",{
        opacity:0,
        scale:0,
    })
})

video.addEventListener("mousemove",(details)=>{

gsap.to("#play",{
    duration:0.5,
    left:details.x-60,
    top:details.y-50
});
})
}
videoAnimation();

function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:60, 
        opacity:0, 
        delay:0.5,
        duration:0.3,
        stagger:0.2,
    })
    gsap.from(".video-container",{
        y:60, 
        opacity:0, 
        duration:0.8,
        delay:0.8,
    })
}
loadingAnimation();

function featureAnimation(){
    var box1 = document.querySelector(".feature-product-01");
    var box2 = document.querySelector(".feature-product-02");
    var box3 = document.querySelector(".feature-product-03");
    var box4 = document.querySelector(".feature-product-04");
    document.addEventListener("mousemove",(dets)=>{
        gsap.to("#cursor",{
            left : dets.x-100,
            top : dets.y-100,
    })})

    box1.addEventListener("mouseenter",()=>{
        gsap.to("#cursor",{
            scale : "1",
            opacity : "1",
            backgroundColor : "#dcd0ff",
    })})
    box1.addEventListener("mouseleave",()=>{
        gsap.to("#cursor",{
            scale : "0",
            opacity : "0",
    })})

    box2.addEventListener("mouseenter",()=>{
        gsap.to("#cursor",{
            scale : "1",
            opacity : "1",
            backgroundColor : "#f5dfcf",

    })})
    box2.addEventListener("mouseleave",()=>{
        gsap.to("#cursor",{
            scale : "0",
            opacity : "0",
    })})

    box3.addEventListener("mouseenter",()=>{
        gsap.to("#cursor",{
            scale : "1",
            opacity : "1",
            backgroundColor : "#e6dfd7",
    })})
    box3.addEventListener("mouseleave",()=>{
        gsap.to("#cursor",{
            scale : "0",
            opacity : "0",
    })})

    box4.addEventListener("mouseenter",()=>{
        gsap.to("#cursor",{
            scale : "1",
            opacity : "1",
            backgroundColor : "#c3d8c5",
    })})
    box4.addEventListener("mouseleave",()=>{
        gsap.to("#cursor",{
            scale : "0",
            opacity : "0",
    })})

}
featureAnimation();

gsap.from(".feature-product",{
    y:100,
    opacity:0,
    scale:0,
    duration:0.5,
    stagger:0.2,
    scrollTrigger:{
        trigger:".feature-products",
        scroller:"#main",
        markers:false,
        start:"top 40%",
        end:"top 60%",
    }
})

gsap.from(".page5-right > img",{
    y:100,
    opacity:0,
    scale:1.1,
    duration:0.5,
    stagger:0.2,
    scrollTrigger:{
        trigger:".page5-content",
        scroller:"#main",
        markers:false,
        start:"top 30%",
        end:"top 80%",
    }
})

gsap.from(".footer-top-center > img",{
    y:100,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:".footer-top",
        scroller:"#main",
        markers:false,
        start:"top 50%",
        end:"top 80%",
    }
})