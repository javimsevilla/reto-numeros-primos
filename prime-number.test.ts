import { PrimeNumber } from './prime-number';

test('Dummy test', () => {
  expect(true).toBe(true);
});

test("should return true if number is prime", () => {
  // Arrange
  let result;
  const expected = true;
  let num = new PrimeNumber();

  // Act
  result = num.isPrime(3);

  // Assert
  expect(result).toBe(expected);
});

test("should return false if number is composed", () => {
  // Arrange
  let result;
  const expected = false;
  let num = new PrimeNumber();

  // Act
  result = num.isPrime(8);

  // Assert
  expect(result).toBe(expected);
});