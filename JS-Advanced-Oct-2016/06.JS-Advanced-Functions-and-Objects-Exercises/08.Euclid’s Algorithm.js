function gcd(num1,num2) {
    if(num2==0){return num1}
    else {
        let remainder = num1%num2;
        return gcd(num2,remainder)
    }
}
console.log(gcd(252, 105))