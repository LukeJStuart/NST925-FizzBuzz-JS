
const { fizzbuzzValue } = require('./fizzbuzz');

describe('fizzbuzzValue', () => {
  test('returns Fizz for multiples of 3 only', () => {
    expect(fizzbuzzValue(3, ['3'])).toBe('Fizz');
  });

  test('returns Buzz for multiples of 5 only', () => {
    expect(fizzbuzzValue(5, ['5'])).toBe('Buzz');
  });

  test('returns Bang for multiples of 7 only', () => {
    expect(fizzbuzzValue(7, ['7'])).toBe('Bang');
  });

  test('returns Bong for multiples of 11 only', () => {
    expect(fizzbuzzValue(11, ['11'])).toBe('Bong');
  });

  test('returns Fezz for multiples of 13 only', () => {
    expect(fizzbuzzValue(13, ['13'])).toBe('Fezz');
  });

  test('reverses output for multiples of 17', () => {
    expect(fizzbuzzValue(51, ['3', '17'])).toBe('Fizz');
    expect(fizzbuzzValue(255, ['3', '5', '17'])).toBe('BuzzFizz');
  });

  test('returns number as string if no rules match', () => {
    expect(fizzbuzzValue(2, ['3', '5', '7', '11', '13', '17'])).toBe('2');
  });

  // Additional comprehensive cases:
  test('returns FizzBuzz for multiples of 3 and 5', () => {
    expect(fizzbuzzValue(15, ['3', '5'])).toBe('FizzBuzz');
  });

  test('returns FizzBang for multiples of 3 and 7', () => {
    expect(fizzbuzzValue(21, ['3', '7'])).toBe('FizzBang');
  });

  test('returns BuzzBang for multiples of 5 and 7', () => {
    expect(fizzbuzzValue(35, ['5', '7'])).toBe('BuzzBang');
  });

  test('returns FizzBuzzBang for multiples of 3, 5, and 7', () => {
    expect(fizzbuzzValue(105, ['3', '5', '7'])).toBe('FizzBuzzBang');
  });

  test('returns Bong only for multiples of 11, even if other rules apply', () => {
    expect(fizzbuzzValue(33, ['3', '11'])).toBe('Bong');
    expect(fizzbuzzValue(55, ['5', '11'])).toBe('Bong');
    expect(fizzbuzzValue(77, ['7', '11'])).toBe('Bong');
    expect(fizzbuzzValue(165, ['3', '5', '11'])).toBe('Bong');
  });

  test('returns FezzBuzz for multiples of 13 and 5 (Fezz before Buzz)', () => {
    expect(fizzbuzzValue(65, ['5', '13'])).toBe('FezzBuzz');
  });

  test('returns FizzFezzBuzz for multiples of 3, 5, and 13 (Fezz before Buzz)', () => {
    expect(fizzbuzzValue(195, ['3', '5', '13'])).toBe('FizzFezzBuzz');
  });

  test('returns FezzBong for multiples of 11 and 13 (Fezz before Bong)', () => {
    expect(fizzbuzzValue(143, ['11', '13'])).toBe('FezzBong');
  });

  test('returns reversed output for multiples of 3, 5, and 17', () => {
    expect(fizzbuzzValue(255, ['3', '5', '17'])).toBe('BuzzFizz');
  });

  test('returns reversed output for multiples of 3, 5, 13, and 17', () => {
  expect(fizzbuzzValue(663, ['3', '13', '17'])).toBe('FezzFizz');
  });

  test('returns reversed output for multiples of 3, 5, 7, and 17', () => {
    expect(fizzbuzzValue(1785, ['3', '5', '7', '17'])).toBe('BangBuzzFizz');
  });

  test('returns reversed output for multiples of 3, 5, 7, 13, and 17', () => {
    expect(fizzbuzzValue(23205, ['3', '5', '7', '13', '17'])).toBe('BangBuzzFezzFizz');
  });

  test('returns Bong only for multiples of 11, even with 13 and 17', () => {
  expect(fizzbuzzValue(2431, ['3', '5', '7', '11', '13', '17'])).toBe('BongFezz');
  });
});
