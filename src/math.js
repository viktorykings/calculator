export const sum = (a, b) => parseFloat(a) + parseFloat(b);
export const substraction = (a, b) => parseFloat(a) - parseFloat(b);
export const multiply = (a, b) => parseFloat(a) * parseFloat(b);
export const division = (a, b) => isFinite(parseFloat(a) / parseFloat(b)) ? parseFloat(a) / parseFloat(b) : 'Error';
export const percentage = (a) => parseFloat(a) / 100;
export const oppositeNumber = (a) => parseFloat(a) * -1;
