import { validateNotEmpty } from './validation';
import { it, describe, expect } from 'vitest';
import { ValidationError } from './errors';

describe('validateNotEmpty()', () => {
  it('should throw if no text parameter', () => {
    const result = () => validateNotEmpty();
    expect(result).toThrow();
  });

  it('should throw if text has length 0', () => {
    const result = () => validateNotEmpty('');
    expect(result).toThrow();
  });

  it('should throw if text has only blanks', () => {
    const result = () => validateNotEmpty('');
    expect(result).toThrow();
  });

  it('should return undefined if text provided correctlly', () => {
    const text = 'text';
    const result = validateNotEmpty(text);
    expect(result).toBeUndefined();
  });

  it('should throw if erroMessage is provided', () => {
    const text = '';
    const errorMessage = 'test';
    const result = () => validateNotEmpty(text, errorMessage);
    expect(result).toThrow(errorMessage);
  });
});
