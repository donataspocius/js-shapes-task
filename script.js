"use strict";

let btns = document.querySelectorAll(".btn");
let output = document.querySelector(".output");
let n = 10;

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
      pyramidOut += "*&nbsp;";
    }
    pyramidOut += "<br>";
  }
  return pyramidOut;
};

let revPyramid = function () {
  let revPyramidOut = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      revPyramidOut += "&nbsp;";
    }
    for (let k = 0; k <= n - i; k++) {
      revPyramidOut += "*&nbsp;";
    }
    revPyramidOut += "<br>";
  }
  return revPyramidOut;
};

let rhomb = function () {
  let rhombOut = "";
  for (let i = 1; i <= n * 2; i++) {
    if (i <= n) {
      for (let j = 0; j < n - i; j++) {
        rhombOut += "&nbsp;";
      }
      for (let k = 0; k < i; k++) {
        rhombOut += "*&nbsp;";
      }
      rhombOut += "<br>";
    }
    if (i > n) {
      for (let p = n; p < i; p++) {
        rhombOut += "&nbsp;";
      }
      for (let h = 0; h < n * 2 - i; h++) {
        rhombOut += "*&nbsp;";
      }
      rhombOut += "<br>";
    }
  }
  return rhombOut;
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
      case "rhomb": {
        output.innerHTML = rhomb();
        break;
      }
      case "clear": {
        output.innerHTML = "Choose your shape";
        break;
      }
    }
  })
);
