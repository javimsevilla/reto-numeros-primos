export class CustomNumber {
  private readonly NOT_A_NUMBER_MESSAGE = 'Input is not a number';
  private readonly NOT_A_NATURAL_NUMBER_MESSAGE = 'Input is not a natural number';
  private readonly EMPTY_VALUE = '';
  private readonly MIN_NATURAL_NUMBER = 0;

  isPrime(value: string): string {
    const num = parseInt(value);
    if (this.isNotANumber(num)) {
      throw new Error(this.NOT_A_NUMBER_MESSAGE);
    }

    if (this.isNotNaturalNumber(num)) {
      throw new Error(this.NOT_A_NATURAL_NUMBER_MESSAGE);
    }

    return this.EMPTY_VALUE;
  }

  private isNotNaturalNumber(num: number): boolean {
    return num < this.MIN_NATURAL_NUMBER;
  }

  private isNotANumber(num: number) {
    return Number.isNaN(num);
  }
}
