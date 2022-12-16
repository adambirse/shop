import { sum } from './';

describe('sum function', () => {
  it('Returns zero when summing no numbers', () => {
    expect(sum()).toBe(0);
  });
  it('adds 1 number', () => {
    expect(sum(2)).toBe(2);
  });
  it('adds 2 numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('adds 3 numbers', () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
  it('adds 4 numbers', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });
  it('adds mixture of negative and positive numbers', () => {
    expect(sum(1, -2)).toBe(-1);
  });
  it('adds all negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
