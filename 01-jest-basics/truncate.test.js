const { truncate } = require('./truncate');

test('truncates a string to a specified length', () => {
  expect(truncate("Salut les copains", 10)).toBe('Salut les...');
  expect(truncate("Hello", 10)).toBe('Hello...');
  expect(truncate("1234567890", 5)).toBe('12345');
});