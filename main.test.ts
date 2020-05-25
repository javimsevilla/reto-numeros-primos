import { CustomNumber } from './custom-number';

test('Dummy test', () => {
  expect(true).toBe(true);
});

test("should throw an error if it's not a number", () => {
  // Arrange
  let result: () => string;
  const expected = 'Input is not a number';
  let customNumber = new CustomNumber();

  // Act
  result = () => customNumber.isPrime('a');

  // Assert
  expect(result).toThrow(expected);
});

test("should not throw an error if it's a number", () => {
  // Arrange
  let result: () => string;
  const expected = 'Input is not a number';
  let customNumber = new CustomNumber();

  // Act
  result = () => customNumber.isPrime('1');

  // Assert
  expect(result).not.toThrow(expected);
});
