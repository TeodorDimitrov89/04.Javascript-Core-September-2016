function solve(num) {
    let fib = (function () {
        let f0 = 1;
        let f1= 1;
        return function () {
            let oldf0 = f0;
            let oldf1 = f1;
            f0 = oldf1;
            f1 = oldf0 + oldf1;
            return oldf0;
        }
    }());
    let fibNum =[];
    for (let i = 0; i < num; i++) {
        fibNum.push(fib()); //извиквам функцията която е в closure за да се изпълни.
    }
    return fibNum;
}
console.log(solve(15));