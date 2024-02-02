const {generateRandomEmail} = require('../function/utils_generateEmail')
describe('generateRandomEmail function', () => {
    test('should return an array', () => {
      const emailArray = generateRandomEmail();
      expect(Array.isArray(emailArray)).toBe(true);
      console.log(emailArray)
    });
  
    test('should return an array with one item', () => {
      const emailArray = generateRandomEmail();
      expect(emailArray.length).toBe(1);
      console.log(emailArray)
    });
  
    test('should generate a valid email in the specified format', () => {
      const emailArray = generateRandomEmail();
      const email = emailArray[0];
      expect(email).toMatch(/^automated_[a-z0-9]+@gmail.com$/);
      console.log(email)
    });
  });