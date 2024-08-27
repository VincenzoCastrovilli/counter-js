let count = 0;

const buttonsList = document.querySelector(".buttons");

function showCount() {
  const screen = document.querySelector(".screen");
  screen.textContent = count;
}

function createButton(content, callback) {
  let button = document.createElement("button");
  button.textContent = content;
  button.addEventListener("click", callback);
  buttonsList.append(button);
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

createButton("+1", incrementByOne);

createButton("+10", incrementByTen);

createButton("-1", decrementByOne);

createButton("-10", decrementByTen);

createButton("RESET", resetCount);
