export class PrimeNumber {

  public isPrime(num:number):boolean{
    for(let i= 2; i<num; i++){
      const sub = num%i;
      if(sub === 0){
        return false;
      }
    }
    return true;
  }
}
