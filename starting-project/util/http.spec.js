import { vi, it, expect, describe } from 'vitest';
import { HttpError } from './errors';
import { sendDataRequest } from './http';

const testResponseData = { name: 'ibrahim' };

const testFetch = vi.fn(
  (url, options) =>
    new Promise((resolve, reject) => {
      if (typeof options.body !== 'string') {
        return reject('not a string!');
      }
      const testResponse = {
        ok: true,
        json() {
          return new Promise((resolve, reject) => resolve(testResponseData));
        },
      };
      resolve(testResponse);
    })
);
vi.stubGlobal('fetch', testFetch);

describe('sendDataRequest()', () => {
  it('should return any available response data', () => {
    const data = { name: 'ibrahim' };
    return expect(sendDataRequest(data)).resolves.toEqual(testResponseData);
  });

  it('should convert body JSON', async () => {
    const data = { name: 'ibrahim' };
    let errorMessage;
    try {
      await sendDataRequest(data);
    } catch (error) {
      errorMessage = error;
    }

    expect(errorMessage).not.toBe('not a string!');
  });

  it('should throw an instance of custome http error if OK = false', () => {
    testFetch.mockImplementationOnce(
      (url, options) =>
        new Promise((resolve, reject) => {
          const testResponse = {
            ok: false,
            json() {
              return new Promise((resolve, reject) =>
                resolve(testResponseData)
              );
            },
          };
          resolve(testResponse);
        })
    );

    const data = { name: 'ibrahim' };
    expect(sendDataRequest(data)).rejects.toBeInstanceOf(HttpError);
  });
});
