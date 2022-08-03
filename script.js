"use strict";

let btns = document.querySelectorAll(".btn");
let output = document.querySelector(".output");
let n = 6;

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    switch (e.target.textContent) {
      case "triangle": {
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
        output.innerHTML = triangle();

        break;
      }
      case "pyramid": {
        // let pyramid = function () {
        //     let pyramidOut = '';
        //     for (let i = 1; i <= n; i++) {
        //         // adding spaces
        //         for (let j = 0; j < n - i; j++) {
        //         }
        //         // adding stars
        //         for () {}
        //         pyramidOut += '<br>'
        //     }
        //     return pyramidOut
        // }
        // output.innerHTML = pyramid;
        // break;
      }
      case "reverse pyramid": {
        console.log("hello");
        break;
      }
      case "clear": {
        output.innerHTML = "Choose your shape";
        break;
      }
    }
  })
);
