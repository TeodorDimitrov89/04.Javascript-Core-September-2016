function isPrimeNumber(number) {
    let prime = true;
    let sqrt = Math.sqrt(number);
    if(number <=1) {
        return prime=false;
    }
    for (let i = 2; i <= sqrt; i++) {
         if(number % i == 0) {
             prime = false;
             break;
         }
    }
    return prime;
}
console.log(isPrimeNumber(['5']));
