let count = 0;

const incrementButtons = document.querySelector(".increment-buttons");
const decrementButtons = document.querySelector(".decrement-buttons");
const resetButton = document.querySelector(".reset");

const title = document.querySelector(".title");
title.textContent = "Counter.js";

function showCount() {
  const screen = document.querySelector(".screen");
  screen.textContent = count;
}

function createButton(text, callback, parentNode, className) {
  let button = document.createElement("button");
  button.textContent = text;
  button.classList.add(className);
  button.addEventListener("click", callback);
  parentNode.append(button);
}

let incrementByOne = () => {
  count++;
  showCount();
};

let decrementByOne = () => {
  count--;
  showCount();
};

let incrementByTen = () => {
  count += 10;
  showCount();
};

let decrementByTen = () => {
  count -= 10;
  showCount();
};

let resetCount = () => {
  count = 0;
  showCount();
};

showCount();

createButton("+1", incrementByOne, incrementButtons, "inc-btn");

createButton("+10", incrementByTen, incrementButtons, "inc-btn");

createButton("-1", decrementByOne, decrementButtons, "dec-btn");

createButton("-10", decrementByTen, decrementButtons, "dec-btn");

createButton("RESET", resetCount, resetButton, "reset-btn");
