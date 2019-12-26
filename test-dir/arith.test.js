import * as a from '../arith';

test('2 + 3 = 5', () => {
  expect(a.add(2, 3)).toBe(5);
});

test('3 * 4 = 12', () => {
  expect(a.mul(3, 4)).toBe(12);
});

test('5 - 6 = -1', () => {
  expect(a.sub(5, 6)).toBe(-1);
});

test('8 / 4 = 2', () => {
  expect(a.div(8, 4)).toBe(2);
});

test.each([[1, 1, 2], [-1, 2, 1], [2, 1, 3]])(
    '%i + %i equals %i', (c, b, expected) => {
      expect(a.add(c, b)).toBe(expected);
    },
);
  