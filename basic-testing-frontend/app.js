import { extractEnterdNumberValues } from './src/parser.js';
import { getResultValue } from './src/math.js';
import { getOutput } from './src/output.js';
import { displayOutput } from './src/displayOutput.js';

const form = document.querySelector('#form');

function formSubmitHandler(event) {
  event.preventDefault();

  const numberInputs = extractEnterdNumberValues(form);

  let result = getResultValue(numberInputs);

  let resultText = getOutput(result);

  displayOutput(resultText);
}

form.addEventListener('submit', formSubmitHandler);
