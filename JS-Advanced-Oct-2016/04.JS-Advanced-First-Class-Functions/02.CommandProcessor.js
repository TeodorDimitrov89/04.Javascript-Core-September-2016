
function processCommand(commands) {
    let commandProcessor = (function commandProcessor() {
        let str ='';
        return {
            append:(newText) => str += newText,
            removeStart:(count) => str=str.slice(count),
            removeEnd:(count) => str=str.slice(0,str.length-count),
            print:()=>console.log(str)
        };

    })();

    for (let command of commands) {
        let [cmd,arg] = command.split(' ');
        commandProcessor[cmd](arg);
    }
}
processCommand(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);

// commandProcessor.append('hello');
// commandProcessor.print();
// commandProcessor.removeStart(1);
// commandProcessor.print();
// commandProcessor.append('hello dasdas');
// commandProcessor.print();


