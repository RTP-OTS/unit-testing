const { generateName } = require('../function/utils_generateName'); // Adjust the path as necessary

// Testing the capFirst function
describe('capFirst', () => {
  it('should capitalize the first letter of a string', () => {
    const input = 'example';
    const output = capFirst(input);
    expect(output).toBe('Example');
  });

  it('should return the original string if the first character is already uppercase', () => {
    const input = 'Example';
    const output = capFirst(input);
    expect(output).toBe('Example');
  });

  it('should handle an empty string', () => {
    const input = '';
    const output = capFirst(input);
    expect(output).toBe('');
  });
});

// Testing the getRandomInt function
describe('getRandomInt', () => {
  it('should return an integer within the specified range', () => {
    const min = 1;
    const max = 10;
    const result = getRandomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(max);
  });

  it('should return the min value when min equals max - 1', () => {
    const min = 5;
    const max = 6;
    const result = getRandomInt(min, max);
    expect(result).toBe(min);
  });
});

// Testing the generateName function
describe('generateName', () => {
  it('should return a string', () => {
    const name = generateName();
    expect(typeof name).toBe('string');
  });

  it('should return a non-empty string', () => {
    const name = generateName();
    expect(name.length).toBeGreaterThan(0);
  });

  it('should return a string containing two capitalized words', () => {
    const name = generateName();
    const words = name.split(' ');
    expect(words.length).toBe(2);
    words.forEach(word => {
      expect(word[0]).toBe(word[0].toUpperCase());
    });
  });
});
