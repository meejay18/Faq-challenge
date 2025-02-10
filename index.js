const firstSign = document.querySelector(".First-sign");
const secondSign = document.querySelector(".Second-sign");
const fourthSign = document.querySelector(".Fourth-sign");
const firstAnswer = document.querySelector(".First-answer-div");
const secondAnswer = document.querySelector(".Second-answer-div");
const thirdAnswer = document.querySelector(".Third-answer-div");
const fourthAnswer = document.querySelector(".Fourth-answer-div");
const firstMinus = document.querySelector(".first-minus");
const secondMinus = document.querySelector(".second-minus");
const thirdMinus = document.querySelector(".third-minus");
const fourthMinus = document.querySelector(".fourth-minus");
const firstPlus = document.querySelector(".first-plus");
const secondPlus = document.querySelector(".second-plus");
const thirdPlus = document.querySelector(".third-plus");
const fourthPlus = document.querySelector(".fourth-plus");
console.log(fourthPlus);

// const firstHidden = document.querySelector(".First-hidden");
// console.log(firstHidden);

const revealFirstAns = function () {
  console.log("revealed");
  firstAnswer.classList.remove("First-hidden");
};
const revealSecondAns = function () {
  console.log(" 2nd revealed");
  secondAnswer.classList.remove("Second-hidden");
};
const revealThirdAns = function () {
  console.log("3rd revealed");
  thirdAnswer.classList.remove("Third-hidden");
};
const revealFourthAns = function () {
  console.log("4th revealed");
  fourthAnswer.classList.remove("Fourth-hidden");
};

firstSign.addEventListener("click", function () {
  revealFirstAns();
  firstMinus.classList.add("first-minus");
});
secondSign.addEventListener("click", function () {
  revealSecondAns();
  secondMinus.classList.remove("second-svg");
});
thirdSign.addEventListener("click", function () {
  revealThirdAns();
  thirdMinus.classList.remove("third-svg");
});
fourthSign.addEventListener("click", function () {
  revealFourthAns();
  fourthMinus.classList.remove("fourth-svg");
});
