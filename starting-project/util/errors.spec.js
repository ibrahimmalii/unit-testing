import { it, describe, expect } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('HttpError Class', () => {
  it('should set the correct values ', () => {
    const statusCode = 200;
    const message = 'success';
    const data = 'dummy data';

    const http = new HttpError(statusCode, message, data);
    expect(http).toEqual({ statusCode, message, data });
  });

  it('should contain undefined as data if no data is provided', () => {
    const statusCode = 200;
    const message = 'success';
    const error = new HttpError(statusCode, message);
    expect(error.data).toBeUndefined();
  });
});

describe('ValidationError Class', () => {
  it('should set the correct message ', () => {
    const message = 'dummy message';

    const error = new ValidationError(message);
    expect(error).toEqual({ message });
    expect(error).not.toEqual({});
    expect(error).not.toEqual('');
  });
});
