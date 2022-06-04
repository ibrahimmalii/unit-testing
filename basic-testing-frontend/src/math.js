import { getNumbersValue } from './util/numbers';

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function getResultValue(numberInputs) {
  let result = '';
  try {
    let numbers = getNumbersValue(numberInputs);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}
