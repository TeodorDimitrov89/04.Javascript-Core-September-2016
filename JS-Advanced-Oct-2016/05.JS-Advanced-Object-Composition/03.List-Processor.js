function solve(inputCommands) {
    let processor = (function () {
        let result = []; //масива трябва да е извън return-a за да може всеки път да се добавя или изтрива
        return {
            add: (str)=> {
                return result.push(str);
            },
            remove:(str) => {
                return result = result.filter(a => a!= str);
            },
            print:()=>console.log(result.join(','))

        }
    }());
    for (let c of inputCommands) {
        let command = c.split(' ');
        let cmd = command[0];
        let str = command[1];
        processor[cmd](str);
        //по този начин трябва да достъпя пропъртито на обекта в closure.
        // тоест на вземи пропъртито на обекта намиращ се в closur-a [cmd] и му подай като стойност в случая променливата str.

    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])