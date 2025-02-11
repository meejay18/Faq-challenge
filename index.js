const firstSign = document.querySelector(".First-sign");
const secondSign = document.querySelector(".Second-sign");
const thirdSign = document.querySelector(".Third-sign");
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

const firstToggle = function () {
  firstPlus.classList.toggle("first-minus");
  firstMinus.classList.toggle("first-minus");

  if (firstMinus.classList.contains("first-minus")) {
    firstAnswer.style.display = "none";
  } else {
    firstAnswer.style.display = "block";
  }
};
const secondToggle = function () {
  secondPlus.classList.toggle("second-minus");
  secondMinus.classList.toggle("second-minus");

  if (secondMinus.classList.contains("second-minus")) {
    secondAnswer.style.display = "none";
  } else {
    secondAnswer.style.display = "block";
  }
};
const thirdToggle = function () {
  thirdPlus.classList.toggle("third-minus");
  thirdMinus.classList.toggle("third-minus");

  if (thirdMinus.classList.contains("third-minus")) {
    thirdAnswer.style.display = "none";
  } else {
    thirdAnswer.style.display = "block";
  }
};
const fourthToggle = function () {
  fourthPlus.classList.toggle("fourth-minus");
  fourthMinus.classList.toggle("fourth-minus");

  if (fourthMinus.classList.contains("fourth-minus")) {
    fourthAnswer.style.display = "none";
  } else {
    fourthAnswer.style.display = "block";
  }
};

const revealFirstAns = function () {
  firstAnswer.classList.remove("First-hidden");
};
const revealSecondAns = function () {
  secondAnswer.classList.remove("Second-hidden");
};
const revealThirdAns = function () {
  thirdAnswer.classList.remove("Third-hidden");
};
const revealFourthAns = function () {
  fourthAnswer.classList.remove("Fourth-hidden");
};

firstSign.addEventListener("click", function () {
  revealFirstAns();
  firstToggle();
});
secondSign.addEventListener("click", function () {
  revealSecondAns();
  secondToggle();
});
thirdSign.addEventListener("click", function () {
  revealThirdAns();
  thirdToggle();
});
fourthSign.addEventListener("click", function () {
  revealFourthAns();
  fourthToggle();
});
