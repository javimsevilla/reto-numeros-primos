export class CustomNumber {
  private readonly NOT_A_NUMBER_MESSAGE = 'Input is not a number';
  private readonly NOT_A_NATURAL_NUMBER_MESSAGE = 'Input is not a natural number';
  private readonly EMPTY_VALUE = '';

  isPrime(value: string): string {
    const num = parseInt(value);
    if (Number.isNaN(num)) {
      throw new Error(this.NOT_A_NUMBER_MESSAGE);
    }

    if (num < 0) {
      throw new Error(this.NOT_A_NATURAL_NUMBER_MESSAGE);
    }

    return this.EMPTY_VALUE;
  }
}
