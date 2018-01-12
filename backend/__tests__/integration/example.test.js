const sum = require('../../tools');

describe('Example test', () => {
  it('should return the correct sum', () => {
    const a = 1;
    const b = 2;

    expect(sum(a, b)).toBe(3);
  });
});
