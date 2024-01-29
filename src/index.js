import "./style.css";
import { sum, substraction, multiply, division, percentage, oppositeNumber } from "./math";

const numBoard = document.querySelector("#numBoard");
const sequence = document.querySelector("#sequence");
const resultPlaceholder = document.querySelector("#currentVal");

const state = {
  a: "",
  b: "",
  operator: "",
  completed: false,
  sequence: [],
  isError: false
};
const OPERATIONS = {
  sum: "+",
  substraction: "-",
  multiply: "*",
  division: "/",
  percentage: "%",
  ac: 'ac',
  oppositeSign: 'oppositeSign',
  equal: '='
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
  data.sequence = [];
  updateScreen(data);
  return data;
};

function calculate(stateObj) {
  const data = stateObj;
  const { a, b, operator: operation } = data;
  switch (operation) {
    case OPERATIONS.sum:
      data.a = sum(a, b);
      break;
    case OPERATIONS.substraction:
      data.a = substraction(a, b);
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
  if(data.isError){
    clearData(data)
    data.isError = false
    console.log(data)
    return
  }
  if (target === OPERATIONS.percentage) {
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

  if(target === OPERATIONS.oppositeSign){
    data.b = ''
    if(data.a) data.a = oppositeNumber(data.a)
    updateScreen(data)
  }

  if (operators.includes(target)) {
    if (data.a && data.b && !data.completed) {
      const res = calculate(data);
      updateScreen(res);
      data.b = "";
      data.completed = false;
    }
    updateScreen(data)
    data.operator = target;
    resultPlaceholder.value = target;
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
    updateScreen(data);
  }

  if (target === OPERATIONS.equal) {
    if (data.b === "" && data.operator) data.b = data.a;
    if(data.b.replace('.', '') == 0) {
      resultPlaceholder.value = 'Error'
      data.isError = true;
      return;
    }
    const res = calculate(data);
    updateScreen(res);
    resultPlaceholder.value = "";
  }
  if (target === OPERATIONS.ac) {
    data = clearData(data);
  }
  return data;
};

numBoard.addEventListener("click", (e) => fillNumbers(e, state));
