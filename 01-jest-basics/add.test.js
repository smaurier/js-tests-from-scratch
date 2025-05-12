const { add } = require('./add');

test('additionne 2 et 3 et retourne 5', () => {
  expect(add(2, 3)).toBe(5);
});

