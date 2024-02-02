const { generatePassport } = require('../function/utils_generatepassport'); // Replace 'yourFileName' with the actual file name

describe('generatePassport', () => {
  it('should return a string of length 9', () => {
    const passport = generatePassport();
    expect(passport).toHaveLength(9);
  });

  it('should start with "E0000"', () => {
    const passport = generatePassport();
    expect(passport.startsWith('E0000')).toBe(true);
  });

  it('should end with a 4-digit number', () => {
    const passport = generatePassport();
    const numberPart = passport.slice(5); // Get the last 4 characters
    expect(numberPart).toMatch(/^\d{4}$/);
  });

  it('should not generate the same number for two consecutive calls', () => {
    const passport1 = generatePassport();
    const passport2 = generatePassport();
    expect(passport1).not.toBe(passport2);
  });
});
