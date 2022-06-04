import { it, expect, beforeEach, describe } from 'vitest';

import { User } from './hooks';

const email = 'ib@g.com';
let user;
describe.concurrent('User Class', () => {
  beforeEach(() => {
    user = new User(email);
  });
  it('should update the email', () => {
    const newTestEmail = 'test2@test.com';
    user.updateEmail(newTestEmail);
    expect(user.email).toBe(newTestEmail);
  });

  it('should have an email property', () => {
    expect(user).toHaveProperty('email');
  });

  it('should store the provided email value', () => {
    expect(user.email).toBe(email);
  });

  it('should clear the email', () => {
    user.clearEmail();

    expect(user.email).toBe('');
  });

  it('should still have an email property after clearing the email', () => {
    user.clearEmail();

    expect(user).toHaveProperty('email');
  });
});
