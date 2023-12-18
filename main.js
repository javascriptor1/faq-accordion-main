"use strict";

const questions = document.querySelectorAll("summary");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.parentElement.hasAttribute("open")) {
      question.children[1].src = "assets/images/icon-plus.svg";
    } else {
      question.children[1].src = "assets/images/icon-minus.svg";
    }
  });
});
