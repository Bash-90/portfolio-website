let show = document.querySelector(".page .nav .icon");
let menu = document.querySelector(".page .nav ul ");
let sec = document.querySelector(".sections");
let serv = document.querySelector(".services");
let boxes = serv.querySelectorAll(".box");
let boxesW = document.querySelectorAll(".work .boxes .box");
let boxesA = document.querySelectorAll(".about .boxes .box");
let boxesR = document.querySelectorAll(".reviews .boxes .box");
let boxesB = document.querySelectorAll(".blog .boxes .box");
let h1 = document.querySelector(".services .container .text h1");
let h1W = document.querySelector(".work .container .text h1");
let h1A = document.querySelector(".about .container .boxes h1");
let h1A2 = document.querySelector(".about .container .boxes .tot");
let h1R = document.querySelector(".reviews .container .text h1");
let h1B = document.querySelector(".blog .container .text h1");

show.addEventListener("click", () => {
  menu.classList.toggle("active");
});

sec.onscroll = () => {
  boxes.forEach((box) => {
    if (sec.scrollTop > 150) {
      box.classList.add("active");
      h1.style.transform = "translateX(0)";
      h1.style.opacity = "1";
    } else {
      box.classList.remove("active");
      h1.style.transform = "translateX(-600px)";
      h1.style.opacity = "0";
    }
  });
  boxesW.forEach((boxW) => {
    if (sec.scrollTop > 750) {
      boxW.classList.add("active");
      h1W.classList.add("active");
    } else {
      boxW.classList.remove("active");
      h1W.classList.remove("active");
    }
  });
  boxesA.forEach((boxA) => {
    if (sec.scrollTop > 2600) {
      boxA.classList.add("active");
      h1A.classList.add("active");
      h1A2.classList.add("active");
    } else {
      boxA.classList.remove("active");
      h1A.classList.remove("active");
      h1A2.classList.remove("active");
    }
  });
  boxesR.forEach((boxR) => {
    if (sec.scrollTop > 3500) {
      boxR.classList.add("active");
      h1R.classList.add("active");
    } else {
      boxR.classList.remove("active");
      h1R.classList.remove("active");
    }
  });
  boxesB.forEach((boxB) => {
    if (sec.scrollTop > 3900) {
      boxB.classList.add("active");
      h1B.classList.add("active");
    } else {
      boxB.classList.remove("active");
      h1B.classList.remove("active");
    }
  });
};
