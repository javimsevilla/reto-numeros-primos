export class CustomNumber {
  private readonly NOT_A_NUMBER_MESSAGE = 'Input is not a number';
  private readonly NOT_A_NATURAL_NUMBER_MESSAGE = 'Input is not a natural number';
  private readonly EMPTY_VALUE = '';
  private readonly MIN_NATURAL_NUMBER = 0;

  isPrime(value: string): string {
    const num = parseInt(value);
    if (Number.isNaN(num)) {
      throw new Error(this.NOT_A_NUMBER_MESSAGE);
    }

    if (num < this.MIN_NATURAL_NUMBER) {
      throw new Error(this.NOT_A_NATURAL_NUMBER_MESSAGE);
    }

    return this.EMPTY_VALUE;
  }
}
