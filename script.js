var gola1 = document.querySelector("#golu-blur");
var gola = document.querySelector("#golu");
document.addEventListener("mousemove", function (det) {
  gola.style.left = det.x + "px";
  gola.style.top = det.y + "px";
  gola1.style.left = det.x - 450 + "px";
  gola1.style.top = det.y - 450 + "px";
});

var img1 = document.querySelector(".dot1 img");
var img2 = document.querySelector(".dot2 img");
var img3 = document.querySelector(".dot3 img");
var ball1 = document.querySelector(".ball1");
var ball2 = document.querySelector(".ball2");
var ball3 = document.querySelector(".ball3");


ball1.addEventListener("mouseenter",function () {
  img1.style.opacity = 1
  img1.style.transition = "all ease 0.1s";
})
ball1.addEventListener("mouseleave",function () {
  img1.style.opacity = 1
  img1.style.transition = "all ease 0.1s";
})
ball2.addEventListener("mouseenter",function () {
  img2.style.opacity = 1
  img1.style.transition = "all ease 0.1s";
})
ball2.addEventListener("mouseleave",function () {
  img2.style.opacity = ""
  img1.style.transition = "all ease 0.1s";
})
ball3.addEventListener("mouseenter",function () {
  img3.style.opacity = 1
  img1.style.transition = "all ease 0.1s";
})
ball1.addEventListener("mouseleave",function () {
  img3.style.opacity = ""
  img1.style.transition = "all ease 0.1s";
})
var ball = document.querySelector("#ball");



  ball.addEventListener("mousemove", function () {
    gola.style.scale = 1;
    gola.style.border = "1px solid #fff";
    gola.style.backgroundColor = "transparent";
    ball.style.color = "#8aa32f";
  });



















var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gola.style.scale = 3;
    gola.style.border = "1px solid #fff";
    gola.style.backgroundColor = "transparent";
    gola.style.transition = "all ease 0.1s";
    h4all.style.color = "#8aa32f";
  });

  elem.addEventListener("mouseleave", function () {
    gola.style.scale = 1;
    gola.style.border = "";
    gola.style.backgroundColor = "";
    gola.style.transition = "all ease 0.1s";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 2,
  delay: 0,
  height: "110",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers :true,
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers : true,
    start: "top -50%",
    end: "top -100%",
    scrub: 2,
  },
});

gsap.from("#about-us,.img1", {
  y: 80,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",

    start: "top 60%",
    end: "top 50%",
    scrub: 3,
  },
});

gsap.from(".card", {
  scale: 0.9,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",

    start: "top 60%",
    end: "top 50%",
    scrub: 3,
  },
});

var card = document.querySelectorAll(".card");
card.forEach(function (elem1) {
  elem1.addEventListener("mouseenter", function () {
    elem1.style.transform = "rotate3d(1,1,0,20deg)";
    elem1.style.transition = "all ease 0.2s";
  });
  elem1.addEventListener("mouseleave", function () {
    elem1.style.transform = "";
    elem1.style.transition = "all ease 0.2s";
  });
});

gsap.from(".dot1,.dot2,.dot3,#food", {
  scale: 0.9,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".dot1,.dot2,.dot3,#food",
    scroller: "body",

    start: "top 60%",
    end: "top 50%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: 100,
  scale: 0.4,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    scrub: 1,
  },
});

gsap.to("#colon2", {
  y: -100,
  scale: 0.4,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    scrub: 1,
  },
});

gsap.from("#page7-child h1", {
  y: 200,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page7-child h1",
    scroller: "body",

    start: "top 60%",
    end: "top 50%",
    scrub: 3,
  },
});



