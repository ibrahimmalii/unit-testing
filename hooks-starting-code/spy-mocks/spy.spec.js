import { describe, it, expect, vi } from 'vitest';
import { logger } from './spy-mock';
import { promises as fs } from 'fs';

vi.mock('fs');

describe('Spy()', () => {
  it('should call fn if provided :)', () => {
    const spies = vi.fn();
    logger(spies);
    return expect(spies).toBeCalled();
  });
});

describe('Mock()', () => {
  it('should be call writeFile function', () => {
    const testData = 'welcome';
    const testFileName = 'data';
    expect(fs.writeFile).toBeCalledWith(testFileName, testData)
    expect(logger()).resolves.toBeUndefined();
  });
});
