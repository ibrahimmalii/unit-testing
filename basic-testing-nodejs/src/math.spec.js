import { add } from './math';
import { it, describe, expect } from 'vitest';

describe('Add function', () => {
  it('should return the summition of all array elements', () => {
    // Arrange
    const numbers = [1, 2];

    // Act
    const result = add(numbers);

    // Assertion
    const expectedResult = numbers.reduce((total, curr) => total + curr, 0);
    expect(result).toEqual(expectedResult);
  });

  it('should yield NaN if one value in array is not a number', () => {
    const numbers = [1, 'string'];
    const result = add(numbers);
    expect(result).toBeNaN();
  });

  it('should yield a correct sum if given an array of strings num', () => {
    const inputs = ['1', '2'];
    const expectedResult = inputs.reduce((curr, prev) => +curr + +prev, 0);
    const result = add(inputs);
    expect(result).toBe(expectedResult);
  });

  it('should yield 0 if the array is empty', () => {
    const inputs = [];
    const result = add(inputs);
    expect(result).toBe(0);
  });

  it('should throw an error if no array is passed', () => {
    const resultFn = () =>  add();
    expect(resultFn).toThrow();
  });

  it('should throw an error if provided by more than one arguments', () => {
    const result = () => add(1, 2);
    expect(result).toThrow();
  });
});
