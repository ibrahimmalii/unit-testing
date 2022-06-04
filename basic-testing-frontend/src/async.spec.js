import { describe, it, expect } from 'vitest';
import { promise } from './async';

describe('async()', () => {
  it('should return async', (done) => {
    const value = 'good promise!!';
    promise(value).then((res) => {
      expect(res).toBe('good promise!!');
      done();
    });
  });

  it('should throw if the response is not string', (done) => {
    const value = '1';
    promise(value).then((res) => {
      try {
        expect(res).toBeTypeOf('string');
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('should return good promise', () => {
    const value = 'good promise!!';
    expect(promise(value)).resolves.toBe('good promise!!');
    expect(promise(value)).resolves.toBeTypeOf('string');
    expect(promise(value)).resolves.toBeDefined();
  });

  it('should return good promise', async() => {
      const value = 'string';
      const result = await promise(value)
      expect(result).toBeDefined();
  });
});
