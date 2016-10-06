function censorship(input) {
    let text = input[0];
    let censor = input.slice(1);
    for(let current of censor) {
        let replaced = '-'.repeat(current.length);
        while(text.indexOf(current) > -1) {
            text = text.replace(current,replaced)
        }
    }
    console.log(text);
}
censorship(
    [
        'roses are red, violets are blue', ', violets are', 'red'
    ]
);
