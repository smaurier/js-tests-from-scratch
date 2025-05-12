const { capitalize } = require('./capitalize');

test('met en majuscule la première lettre du string', () => {
  expect(capitalize('bonjour')).toBe('Bonjour');
  expect(capitalize('sylvain')).toBe('Sylvain');
});

