import "./style.css";
import { multiply, percentage, oppositeNumber } from "./math";
import calculate from "./calculator";
import themeSwitchFunc from "./themeSwitch";
import { updateScreen, clearData } from "./helpers";
import { OPERATIONS, numbers, operators } from "./constatns";
import { activeBtn, unactiveBtn } from "./keyboardHandlers";

const numBoard = document.querySelector("#numBoard");
const sequence = document.querySelector("#sequence");
const resultPlaceholder = document.querySelector("#currentVal");

const state = {
  a: "",
  b: "",
  operator: "",
  completed: false,
  sequence: "",
  currentValue: "",
  isError: false,
  theme: "theme-orange",
};

const fillNumbers = (e, stateObj) => {
  let data = stateObj;
  const target = e.key ? e.key : e.target.value;
  console.log("target", target);
  if (data.isError) {
    clearData(data);
    data.isError = false;
    console.log(data);
    return;
  }
  if (target === OPERATIONS.percentage && data.b) {
    console.log(data);
    resultPlaceholder.value = target;
    if (
      data.operator === OPERATIONS.sum ||
      data.operator === OPERATIONS.substraction
    ) {
      data.b = multiply(percentage(data.b), data.a);
    }
    if (
      data.operator === OPERATIONS.multiply ||
      data.operator === OPERATIONS.division
    )
      data.b = percentage(data.b);
  }

  if (target === OPERATIONS.oppositeSign) {
    data.b = "";
    if (data.a) data.a = oppositeNumber(data.a);
    updateScreen(data, resultPlaceholder, sequence);
  }

  if (operators.includes(target)) {
    if(!data.a) return
    if (data.a && data.b && !data.completed) {
      const res = calculate(data);
      updateScreen(res, resultPlaceholder, sequence);
      data.b = "";
      data.completed = false;
    }
    updateScreen(data, resultPlaceholder, sequence);
    data.operator = target;
    resultPlaceholder.value = target;
    console.log(data)
  }

  if (numbers.includes(target)) {
    if (data.b === "" && data.operator === "") {
      data.a += target;
    } else if (data.a !== "" && data.b !== "" && data.completed) {
      data.b = target;
      data.completed = false;
    } else {
      data.b += target;
    }
    updateScreen(data, resultPlaceholder, sequence);
    console.log(data);
  }

  if (target === OPERATIONS.equal || target === "Enter") {
    if (data.b === "" && data.operator) data.b = data.a;

    const res = calculate(data);
    updateScreen(res, resultPlaceholder, sequence);
    resultPlaceholder.value = "";
  }
  if (target === OPERATIONS.ac) {
    data = clearData(data, resultPlaceholder, sequence);
  }
};

numBoard.addEventListener("click", (e) => fillNumbers(e, state));
window.addEventListener("keydown", (e) => {
  activeBtn(e);
  fillNumbers(e, state);
});
window.addEventListener("keyup", unactiveBtn);

const themeSwitch = document.querySelector("#themeSwitch");
themeSwitch.addEventListener("click", (e) => {
  state.theme = themeSwitchFunc(e, state.theme);
});
