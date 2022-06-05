// @vitest-environment happy-dom

import path from 'path';
import fs from 'fs';

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { showError } from './dom';

import { Window } from 'happy-dom';

const htmlDocPath = path.join(`${process.cwd()}/index.html`);
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();
const window = new Window();
const { document } = window;

document.write(htmlDocumentContent);

vi.stubGlobal('document', document);

describe('showError()', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);
  });
  it('should add paragraph in the element has id=errors', () => {
    showError('test error');
    let parentElement = document.getElementById('errors');

    const childP = parentElement.firstElementChild;

    expect(childP).not.toBeNull();
  });

  it('should not contain an error initially', () => {
    let parentElement = document.getElementById('errors');

    const childP = parentElement.firstElementChild;
    expect(childP).toBeNull();
  });

  it('should output the provided message in the error paragraph', () => {
    const errorMessage = 'test error';
    showError(errorMessage);
    const parentElement = document.getElementById('errors');
    const content = parentElement.firstElementChild.textContent;

    expect(content).toBe(errorMessage);
  });
});
