import { NumberValidation } from "./number-validation";

test("should not throw an error if it's a number", () => {
    // Arrange
    let result: () => void;
    const expected = 'Input is not a number';
  
    // Act
    result = () => NumberValidation.validateInputNumber(1);
  
    // Assert
    expect(result).not.toThrow(expected);
  });

  test("should throw an error if it is not a natural number", () => {
    // Arrange
    let result: () => void;
    const expected = 'Input is not a natural number';
  
    // Act
    result = () => NumberValidation.validateInputNumber(-1);
  
    // Assert
    expect(result).toThrow(expected);
  });

  test("should throw an error if it's not a number", () => {
    // Arrange
    let result: () => void;
    const expected = 'Input is not a number';
  
    // Act
    result = () => NumberValidation.validateInputNumber(NaN);
  
    // Assert
    expect(result).toThrow(expected);
  });