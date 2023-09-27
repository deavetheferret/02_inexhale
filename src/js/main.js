// var timeChoices = document.querySelectorAll(".duration-screen-time-choice");
// let exerciseTime = 0;

// timeChoices.forEach((timeChoice) => {
//   var times = document.querySelectorAll(".time");
//   let choosedTime = 0; // Initialisez choosedTime à 0
//   // times.forEach((time) => {
//   //   let dataTime = parseInt(time.getAttribute("data-time"));
//   // });
//   times.forEach((time) => {
//     let dataTime = parseInt(time.getAttribute("data-time"));
//     choosedTime = dataTime;
//   });

//   timeChoice.addEventListener("click", (e) => {
//     exerciseTime = choosedTime; // Ajoutez la valeur de choosedTime à exerciseTime en utilisant +=
//     console.log(`choosed one`);
//     console.log(exerciseTime);
//     console.log(choosedTime);
//     console.log(times);
//     console.log(dataTime);
//   });
// });

import { gsap } from "gsap";

let exerciseTime = 4;
var timeChoices = document.querySelectorAll(".duration-screen-time-choice");

timeChoices.forEach((timeChoice) => {
  timeChoice.addEventListener("click", (e) => {
    console.log(`clicked`);
    if (timeChoice.classList.contains("choice-1")) {
      timeChoices.forEach((timeChoice) => {
        timeChoice.classList.remove("user-choice");
      });
      timeChoice.classList.toggle("user-choice");
      exerciseTime = 1;
    } else if (timeChoice.classList.contains("choice-2")) {
      timeChoices.forEach((timeChoice) => {
        timeChoice.classList.remove("user-choice");
      });
      timeChoice.classList.toggle("user-choice");
      exerciseTime = 2;
    } else if (timeChoice.classList.contains("choice-3")) {
      timeChoices.forEach((timeChoice) => {
        timeChoice.classList.remove("user-choice");
      });
      timeChoice.classList.toggle("user-choice");
      exerciseTime = 3;
    } else if (timeChoice.classList.contains("choice-4")) {
      timeChoices.forEach((timeChoice) => {
        timeChoice.classList.remove("user-choice");
      });
      timeChoice.classList.toggle("user-choice");
      exerciseTime = 4;
    } else if (timeChoice.classList.contains("choice-5")) {
      timeChoices.forEach((timeChoice) => {
        timeChoice.classList.remove("user-choice");
      });
      timeChoice.classList.toggle("user-choice");
      exerciseTime = 5;
    }
    console.log(exerciseTime);
  });
});

let repeatOrder = (exerciseTime * 60) / 10;

var tl = gsap.timeline({ delay: 1 });
var tlRep = gsap.timeline({ repeatDelay: 0.1, repeat: repeatOrder });

tl.to(".countdown-3", { opacity: 1, duration: 1 });
tl.to(".countdown-3", { opacity: 0, duration: 1 });
tl.to(".countdown-2", { opacity: 1, duration: 1 });
tl.to(".countdown-2", { opacity: 0, duration: 1 });
tl.to(".countdown-1", { opacity: 1, duration: 1 });
tl.to(".countdown-1", { opacity: 0, duration: 1 });

tlRep.to(".focus-ring", {
  width: "500px",
  duration: 7,
  ease: "power2.out",
});
tlRep.to(".focus-ring", { width: "300px", duration: 3, ease: "power2.in" });
