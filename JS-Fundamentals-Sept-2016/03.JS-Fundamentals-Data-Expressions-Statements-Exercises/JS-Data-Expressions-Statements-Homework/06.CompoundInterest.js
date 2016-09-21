function compoundInterest([p,i,n,t]) {
//P is the principal sum
//i is the nominal interest rate
//n is the compounding frequency
//t is the overall length of time the interest is applied
//F=P(1+i/n)^nt
    [p, i, n, t] = [p, i, n, t].map(Number);
    i /= 100;
    let frequency = 12 / n;
    let F = p * Math.pow(1 + i / frequency, frequency * t);
    console.log(F.toFixed(2));
}

compoundInterest(["1500", "4.3", "3", "6"]);