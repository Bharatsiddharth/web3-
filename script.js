gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


function page1animation(){
  let tl = gsap.timeline();


tl.from(".page1 .nav1,button", {
  // y:-50,
  duration:1,
  opacity:0,
  stragger:true
})

tl.from(".page1 .nav2", {
  y:-50,
  duration:0.5,
  opacity:0,
  stragger:true
})


tl.from(".page1 .heading ", {
  y:100,
  duration:0.5,
  opacity:0,
  stragger:true
})

tl.from(".page1 .blur", {
  x:700,
  y:-500,
  duration:1,
  opacity:0
})

tl.from(".page1 .blur2", {
  x:-700,
  y:-300,
  duration:1,
  ease:"ease",
  opacity:0
})


tl.from(".page1 .left-page1,.left2-page1,.right-page1", {
  y:100,
  duration:0.5,
  opacity:0,
  stragger:true
})

tl.from(".page1 img", {
  // y:100,
  scale: (0.5),
  duration:0.5,
  opacity:0,
  stragger:true
})
}

page1animation();


function page2animation(){
  
let tl2 = gsap.timeline({
  // duration:10,
  scrollTrigger:{
    trigger:".blur-page2",
    scroller:".main",
    // markers:true,
    start:"-250% 70%",
    end:"-250% 10%",
    scrub:3
}
});





tl2.from(".page2 h1", {
  y:-50,
  duration:1,
  ease:"ease",
  opacity:0,
  
})

tl2.from(".page2 .blur-page", {
  x:-700,
  y:-300,
  duration:3,
  opacity:0,
})

tl2.from(".page2 .blur-page2", {
  x:700,
  y:-300,
  duration:3,
  ease:"ease",
  opacity:0,
  
})


tl2.from(".left-page2 h2", {
  y:-50,
  duration:1,
  ease:"ease",
  opacity:0,
})

tl2.from(".left-page2 p", {
  y:-50,
  duration:1,
  ease:"ease",
  opacity:0,
})

tl2.from(".left-page2 h3", {
  y:-50,
  duration:1,
  ease:"ease",
  opacity:0,
})

tl2.from(".left-page2 button", {
  y:-50,
  duration:1,
  ease:"ease",
  opacity:0,
})

tl2.from(".page2 img", {
  // y:100,
  scale: (0.5),
  duration:0.5,
  opacity:0,
  stragger:true
})
}

page2animation();


function page3animation(){
  let tl3 = gsap.timeline({
    // duration:10,
    scrollTrigger:{
      trigger:".elem1",
      scroller:".main",
      // markers:true,
      start:"-150% 70%",
      end:"-150% 10%",
      scrub:5
  }
  });
  
  tl3.from(".page3 .elem1", {
    y:100,
    // duration:3,
    opacity:0,
  })
  
  
  tl3.from(".page3 .h111", {
    y:100,
    // duration:3,
    opacity:0,
  })
  
  tl3.from(".page3 .swiper", {
    x:300,
    // duration:3,
    opacity:0,
  })
}

page3animation();




let tl4 = gsap.timeline({
  duration:10,
  scrollTrigger:{
    trigger:"footer",
    scroller:".main",
    // markers:true,
    start:"-55% 40%",
    end:"-55% 10%",
    scrub:2
}
});

tl4.from("footer h1", {
  y:100,
  duration:10,
  opacity:0,
})



tl4.from("footer .card1-footer,.card2-footer,.card3-footer", {
  y:100,
  duration:10,
  opacity:0,
})

tl4.from("footer .line", {
  duration:3,
  opacity:0,
})

tl4.from("footer h2", {
  y:100,
  duration:10,
  opacity:0,
})