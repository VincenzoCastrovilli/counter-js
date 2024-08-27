let count = 0;
const buttonsList = document.querySelector(".buttons");

const screen = document.querySelector(".screen");
screen.textContent = `count is ${count}`;

function createButton(content, callback) {
  let button = document.createElement("button");
  button.textContent = content;
  button.addEventListener("click", callback);
  buttonsList.append(button);
}

let incrementByOne = () => {
  count++;
  screen.textContent = `count is ${count}`;
};

let decrementByOne = () => {
  count--;
  screen.textContent = `count is ${count}`;
};

let incrementByTen = () => {
  count += 10;
  screen.textContent = `count is ${count}`;
};

let decrementByTen = () => {
  count -= 10;
  screen.textContent = `count is ${count}`;
};

let resetCount = () => {
  count = 0;
  screen.textContent = `count is ${count}`;
};

createButton("+1", incrementByOne);

createButton("+10", incrementByTen);

createButton("-1", decrementByOne);

createButton("-10", decrementByTen);

createButton("RESET", resetCount);
