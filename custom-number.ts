import  {NumberValidation} from './number-validation';

export class CustomNumber {

  isPrime(value: string): boolean {
    const num = parseInt(value);
    NumberValidation.validateInputNumber(num);

    return this.isPrimeNumber(num);
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
