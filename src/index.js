import './style.css';
import {sum, substraction, multiply, division} from './math'

let operHistory = []
let allHistory = []
const OPERATIONS = {
    sum: '+',
    substraction: '-',
    multiply: '*',
    division: '/'
}

const getStr = (e, arr) => {
    const target = e.target.value
    console.log(target)
    const operatorsArr = ['+', '-', '*', '/']
    if (target === '=') {
        console.log(arr)
        return arr
    }
    operatorsArr.includes(target) ? arr.push(target) : arr.push(Number(target))
}
console.log(Number('+'))
const calculate = () => {
    const [a, operation, b] = operHistory
    let result = null

    switch(operation) {
        case OPERATIONS.sum:
            result = sum(a,b);
            break;
            case OPERATIONS.substraction:
                result = substraction(a,b);
                break;
                case OPERATIONS.multiply:
                    result = multiply(a,b);
                    break;
                    case OPERATIONS.division:
                        result = division(a,b);
                        break;
    }
    console.log(result)
    allHistory.push(result)
    operHistory = []
    return result

}


const numBoard = document.querySelector('#numBoard')
numBoard.addEventListener('click', (e) => {
    getStr(e, operHistory)
    if(e.target.value === '=') calculate()
})