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
  sequence: []
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
  sequence.value = stateObj.a;
  resultPlaceholder.value = stateObj.b ? stateObj.b : stateObj.a;
};

const clearData = (stateObj) => {
  const data = stateObj;

  data.a = "";
  data.b = "";
  data.operator = "";
  data.completed = false;
  data.sequence = []
  console.log(data);
  updateScreen(data)
  return data;
};
const clearSequence = (stateObj) => {
    const data = stateObj;
    data.sequence[0] = data.a
    data.sequence[1] = ''
    data.sequence[2] = ''

}

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
  return data;
}

const fillNumbers = (e, stateObj) => {
  let data = stateObj;
  const target = e.target.value;

  if (operators.includes(target)) {
    data.operator = target;
    updateScreen(data);
    resultPlaceholder.value = target
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
    updateScreen(data);
  }
  if (target === "=") {
    if (data.b === "") data.b = data.a;
    const res = calculate(data);
    updateScreen(res);
    resultPlaceholder.value = ''
  }
  if (target === "ac") {
    data = clearData(data);
  }

  console.log(data);
  return data;
};

numBoard.addEventListener("click", (e) => fillNumbers(e, state));
