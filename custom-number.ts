export class CustomNumber {
  private readonly NOT_A_NUMBER_MESSAGE = 'Input is not a number';
  private readonly NOT_A_NATURAL_NUMBER_MESSAGE = 'Input is not a natural number';
  private readonly EMPTY_VALUE = '';
  private readonly MIN_NATURAL_NUMBER = 0;

  isPrime(value: string): boolean {
    const num = parseInt(value);
    this.validateInputNumber(num);

    return this.isPrimeNumber(num);
  }

  private validateInputNumber(num: number): void {
    this.validateIsNumber(num);
    this.validateIsNaturalNumber(num);
  }

  private validateIsNaturalNumber(num: number): void {
    if (this.isNotNaturalNumber(num)) {
      throw new Error(this.NOT_A_NATURAL_NUMBER_MESSAGE);
    }
  }

  private validateIsNumber(num: number): void {
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

  private isPrimeNumber(num:number):boolean{
    for(let i= 2; i<num; i++){
      const sub = num%i;
      if(sub === 0){
        return false;
      }
    }
    return true;
  }
}
