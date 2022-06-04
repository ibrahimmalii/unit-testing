import { getNumbersValue, transformToNumber } from './numbers';
import { it, expect, describe } from 'vitest';

describe('transformToNumber()', () => {
  it('should throw an error if value is not a number', () => {
    const value = 'invalid';
    const value2 = {};

    const result = transformToNumber(value);
    const result2 = transformToNumber(value);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });

  it('should return number if passed a string number value', () => {
    const value = '1';
    const result = transformToNumber(value);
    expect(result).toBeTypeOf('number');
  });

  it('should return number if passed a string number value', () => {
    const value = '1';
    const result = transformToNumber(value);
    expect(result).toBe(1);
  });

  it('should return NaN if no parameter passed', () => {
    const result = transformToNumber();
    expect(result).toBeNaN();
  });
});

describe('getNumbersValue()', () => {
  it('should throw if provided invalid numberInputs', () => {
    const result1 = () => getNumbersValue();
    const result2 = () => getNumbersValue(undefined);
    const result3 = () => getNumbersValue('string');
    const result4 = () => getNumbersValue(1);

    expect(result1).toThrow();
    expect(result2).toThrow();
    expect(result3).toThrow();
    expect(result4).toThrow();
  });

  it('should return an array', () => {
    const numberInput = '1';
    const result = getNumbersValue(numberInput);
    expect(result).toBeTypeOf('object');
  });
});
