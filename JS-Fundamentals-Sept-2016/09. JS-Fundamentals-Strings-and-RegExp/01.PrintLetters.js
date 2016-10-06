function printLetters(input) {
    let str = input[0].split('').filter(w=>w!='').forEach((n,i)=> {
        console.log(`str[${i}] -> ${n}`);
    });
}

printLetters(['Hello, World!']);
