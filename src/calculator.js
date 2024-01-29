import { sum, substraction, multiply, division } from "./math";
import {OPERATIONS} from './constatns';

export function calculate(stateObj) {
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
        if(data.a === Infinity) {
          
        }
        break;
      default:
        break;
    }
    data.completed = true;
    return data;
  }
// export default calculate;