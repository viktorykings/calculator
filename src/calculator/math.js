const toFixedWithoutZeros = (num, precision = 8) => Number.parseFloat(num.toFixed(precision));

export const sum = (a, b) => toFixedWithoutZeros(parseFloat(a) + parseFloat(b));
export const substraction = (a, b) => toFixedWithoutZeros(parseFloat(a) - parseFloat(b));
export const multiply = (a, b) => toFixedWithoutZeros(parseFloat(a) * parseFloat(b));
export const division = (a, b) => {
  if (Number.isFinite(parseFloat(a) / parseFloat(b))) {
    if (Number.isInteger(parseFloat(a) / parseFloat(b))) {
      return parseFloat(a) / parseFloat(b);
    }
    return toFixedWithoutZeros((parseFloat(a) / parseFloat(b)));
  }
  return "Error";
};
export const percentage = (a) => parseFloat(a) / 100;
export const oppositeNumber = (a) => parseFloat(a) * -1;