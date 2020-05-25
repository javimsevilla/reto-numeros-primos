export class CustomNumber {
  private readonly NOT_A_NUMBER_MESSAGE = 'Input is not a number';

  isPrime(value: string): string {
    if (Number.isNaN(parseInt(value))) {
      throw new Error(this.NOT_A_NUMBER_MESSAGE);
    }

    if (parseInt(value) < 0) {
      throw new Error('Input is not a natural number');
    }

    return '';
  }
}
