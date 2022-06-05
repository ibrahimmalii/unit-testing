import { transformToNumber } from './numbers';
import { it, expect, describe } from 'vitest';

describe('Transform function', () => {
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
