import { validateStringNotEmpty, validateNumber } from './validation';
import { it, expect, describe } from 'vitest';

describe('Validate stringNotEmpty function', () => {
  it('it should throw if no value', () => {
    const result = () => validateStringNotEmpty();
    expect(result).toThrow();
  });

  it('should throw if string length is less than 1', () => {
    const value = ' ';
    const result = (result) => validateStringNotEmpty(value);
    expect(result).throw(/must not be empty/);
  });
});

describe('Validate validateNumber function', () => {
    it('should throw if passed an invalid parameter', () => {
        const number = 'invalid';
        const result = () => validateNumber(number);
        expect(result).toThrow(/Invalid number input./);
    });

    it('should throw an error if no parameter passed', () => {
        const result = () => validateNumber();
        expect(result).toThrow()
    });

    it('should return undefined if has valid parameter', () => {
        const result = validateNumber(1);
        expect(result).toBeTypeOf('undefined');
    });
});
