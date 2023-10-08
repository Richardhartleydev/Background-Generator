// Variables
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let result = document.getElementById("result");
let body = document.getElementById("body");
let random = document.getElementById("random");

// Set body gradient with template literal syntax
function colorPicker() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
  result.textContent = `${body.style.background}`;
}

// Random #hex generator
function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Set color1 to #hex from loop 1, set color2 to #hex from loop 2
random.addEventListener("click", function () {
  color1.value = randomColor();
  color2.value = randomColor();
  colorPicker();
});

// Input event listeners
color1.addEventListener("input", colorPicker);
color2.addEventListener("input", colorPicker);
