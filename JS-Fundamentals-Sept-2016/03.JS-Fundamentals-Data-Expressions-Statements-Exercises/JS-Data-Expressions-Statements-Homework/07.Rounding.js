function rounding([number,n]) {
    [number,n]=[number,n].map(Number);
    // if(n >= 15) {
    //     n = 15
    // }
    let denominator = Math.pow(10,n);
    let second = Math.round(number*denominator)/denominator;
    console.log(second);

    // console.log(Number(number.toFixed(n)));
}
rounding(["3.1","2"]);
