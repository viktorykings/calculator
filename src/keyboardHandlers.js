import{OPERATIONS, numbers, operators} from './constatns'

export function activeBtn(e) {
    console.log(e.key);
    let value = e.key
    if(e.key === 'Enter') value = '='
    const btn = document.querySelector(`button[value="${value}"]`)
    if(numbers.includes(e.key) || operators.includes(e.key) || e.key === OPERATIONS.equal || e.key === 'Enter'){
      btn.classList.add('active')
    }
  }
export function unactiveBtn(e){
    if(!e.shiftKey) {const btn = document.querySelector('.active')
    btn.classList.remove('active')}
  }