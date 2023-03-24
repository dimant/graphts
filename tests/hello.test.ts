import * as graphts from '../src/program';

test('adds 1 + 2 to equal 3', () => {
  expect(graphts.add(1, 2)).toBe(3);
});