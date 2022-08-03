"use strict";

let btns = document.querySelectorAll(".btn");
let output = document.querySelector(".output");
let n = 6;

let triangle = function () {
  let triangleOut = "";
  for (let i = 1; i <= n; i++) {
    for (let k = 0; k < i; k++) {
      triangleOut += "*";
    }
    triangleOut += "<br>";
  }
  return triangleOut;
};

let pyramid = function () {
  let pyramidOut = "";
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= n - i; k++) {
      pyramidOut += "&nbsp;";
    }
    for (let j = 0; j < i; j++) {
      pyramidOut += "&nbsp;*&nbsp;";
    }
    pyramidOut += "<br>";
  }
  return pyramidOut;
};

let revPyramid = function () {
  let revPyramidOut = "";
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= n - i; k++) {
      revPyramidOut += "&nbsp;*&nbsp;";
    }
    for (let j = 0; j < i; j++) {
      revPyramidOut += "&nbsp;";
    }
    revPyramidOut += "<br>";
  }
  return revPyramidOut;
};

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    switch (e.target.textContent) {
      case "triangle": {
        output.innerHTML = triangle();
        break;
      }
      case "pyramid": {
        output.innerHTML = pyramid();
        break;
      }
      case "reverse pyramid": {
        output.innerHTML = revPyramid();
        break;
      }
      case "clear": {
        output.innerHTML = "Choose your shape";
        break;
      }
    }
  })
);
