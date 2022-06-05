import { describe, it, expect, beforeEach } from 'vitest';
import { savePost, extractPostData } from './posts';

describe('savePost()', () => {
  it('should throw if no postData provided', () => {
    const result = () => savePost();
    expect(result).toThrow();
  });

  // it('should return a promise if postData provided', () => {
  //     const postData = {};
  //     const result = savePost(postData);
  //     return expect(result).resolves();
  // });
});

let form;
describe('extractPOstData()', () => {
  beforeEach(() => {
    form = {
      title: 'title',
      content: 'content',
      get(type) {
        return this[type];
      },
    };
  });

  it('should throw if no form provided', () => {
    const result = () => extractPostData();
    expect(result).toThrow();
  });

  it('should return object of title and content if title and content are provided.', () => {
    const expectedResult = { title: form.title, content: form.content };

    const result = extractPostData(form);

    expect(result).toBeTypeOf('object');
    expect(result).toEqual(expectedResult);
  });

  it('should throw if content is missed', () => {
    delete form.content;
    const result = () => extractPostData(form);
    expect(result).toThrow('Content must not be empty!');
  });

  it('should throw if title is missed', () => {
    delete form.title;
    const result = () => extractPostData(form);
    expect(result).toThrow('A title must be provided.');
  });
});
