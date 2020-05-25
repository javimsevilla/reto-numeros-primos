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
