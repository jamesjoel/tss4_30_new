// test/random-string-generator.test.js
const { generateRandomString } = require('../src/random-string-generator');

describe('generateRandomString', () => {
  test('it should generate a string of the specified length', () => {
    const length = 10;
    const result = generateRandomString(length);
    expect(result).toHaveLength(length);
  });

  
  test('it should generate a different string on each call', () => {
    const result1 = generateRandomString(8);
    const result2 = generateRandomString(8);
    expect(result1).not.toEqual(result2);
  });
});
