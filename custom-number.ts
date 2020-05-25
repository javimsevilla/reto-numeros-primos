export class CustomNumber {
  private readonly NOT_A_NUMBER_MESSAGE = 'Input is not a number';
  private readonly NOT_A_NATURAL_NUMBER_MESSAGE = 'Input is not a natural number';
  private readonly EMPTY_VALUE = '';
  private readonly MIN_NATURAL_NUMBER = 0;

  isPrime(value: string): boolean {
    const num = parseInt(value);
    this.validateInputNumber(num);
    
    return true;
  }

  private validateInputNumber(num: number) {
    this.validateIsNumber(num);
    this.validateIsNaturalNumber(num);
  }

  private validateIsNaturalNumber(num: number) {
    if (this.isNotNaturalNumber(num)) {
      throw new Error(this.NOT_A_NATURAL_NUMBER_MESSAGE);
    }
  }

  private validateIsNumber(num: number) {
    if (this.isNotNumber(num)) {
      throw new Error(this.NOT_A_NUMBER_MESSAGE);
    }
  }

  private isNotNaturalNumber(num: number): boolean {
    return num < this.MIN_NATURAL_NUMBER;
  }

  private isNotNumber(num: number): boolean {
    return Number.isNaN(num);
  }
}
