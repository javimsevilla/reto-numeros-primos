export class CustomNumber {
  isPrime(value: string): string {
    if (Number.isNaN(parseInt(value))) {
      throw new Error('Input is not a number');
    }

    return '';
  }
}
