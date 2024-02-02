const { generateAlienIdCard } = require('../function/utils_generateAlienIdCard');

describe('generateAlienIdCard function', () => {
  test('should return a string', () => {
    const idCard = generateAlienIdCard();
    expect(typeof idCard).toBe('string');
  });

  test('should return a string of length 11', () => {
    const idCard = generateAlienIdCard();
    expect(idCard.length).toBe(11);
  });

  test('should contain only digits', () => {
    const idCard = generateAlienIdCard();
    expect(idCard).toMatch(/^\d+$/);
  });
});
