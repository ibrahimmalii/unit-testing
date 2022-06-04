import { it, expect, describe } from 'vitest';
import { getOutput } from './output';

describe('GetOutput function', () => {
  it('should return string, no matter which value is passed in', () => {
    const parameter1 = 'dummy';
    const parameter2 = 1;
    const parameter3 = false;

    const result1 = getOutput(parameter1);
    const result2 = getOutput(parameter2);
    const result3 = getOutput(parameter3);

    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';
    const returnedValue = getOutput(result);
    expect(returnedValue).toContain('Invalid');
  });

  it('should return the valid result if parameter !== no-calc', () => {
    const parameter = 'any dummy text';
    const returnedValue = getOutput(parameter);
    expect(returnedValue).toBe('Result: ' + parameter);
  });

  it('should return an empty string if provided "no-calc" as a result', () => {
    const result = 'no-calc';
    const returnedValue = getOutput(result);
    expect(returnedValue).toBe('');
  });
});



