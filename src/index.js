import "./style.css";
import { sum, substraction, multiply, division } from "./math";

const numBoard = document.querySelector("#numBoard");
const sequence = document.querySelector("#sequence");
const resultPlaceholder = document.querySelector("#currentVal");

const state = {
  a: "",
  b: "",
  operator: "",
  completed: false,
};
const OPERATIONS = {
  sum: "+",
  substraction: "-",
  multiply: "*",
  division: "/",
};
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operators = ["+", "-", "*", "/"];

const updateScreen = (stateObj) => {
  const data = stateObj;
  sequence.innerText = data.a;
  resultPlaceholder.innerText = data.b;
};

const clearData = (stateObj) => {
  const data = stateObj;

  data.a = "";
  data.b = "";
  data.operator = "";
  data.completed = false;
  console.log(data);
  return data;
};

function calculate(stateObj) {
  const data = stateObj;
  const { a, b, operator: operation } = data;
  switch (operation) {
    case OPERATIONS.sum:
      data.a = sum(+a, +b);
      break;
    case OPERATIONS.substraction:
      data.a = substraction(+a, +b);
      break;
    case OPERATIONS.multiply:
      data.a = multiply(a, b);
      break;
    case OPERATIONS.division:
      data.a = division(a, b);
      break;
    default:
      break;
  }
  data.completed = true;
  console.log("calc, data", data);
  return data;
}

const fillNumbers = (e, stateObj) => {
  let data = stateObj;
  const target = e.target.value;

  if (operators.includes(target)) {
    data.operator = target;
    console.log("after plus", data);
  }
  if (numbers.includes(target)) {
    if (data.b === "" && data.operator === "") {
      data.a += target;
      updateScreen(data);
    } else if (data.a !== "" && data.b !== "" && data.completed) {
      data.b = target;
      data.completed = false;
      updateScreen(data);
    } else {
      data.b += target;
      updateScreen(data);
    }
    console.log("after num", data);
  }
  if (target === "=") {
    if (data.b === "") data.b = data.a;
    const res = calculate(data);
    updateScreen(res);
  }
  if (target === "ac") {
    data = clearData(data);
  }

  console.log(data);
  return data;
};

numBoard.addEventListener("click", (e) => fillNumbers(e, state));
