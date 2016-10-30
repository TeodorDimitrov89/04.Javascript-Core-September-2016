function solve() {
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ": " + obj);
        if (!summary[type]) {
            summary[type] = 1;
        }
        else {
            summary[type]++;
        }
    }

    let sortedType = [];
    for (let currentType in summary) {
        sortedType.push([currentType, summary[currentType]]);
    }
    let sorted = sortedType.sort((a,b) => b[1] - a[1]);
    for (let [k,v] of sorted) {
        console.log(k+" = "+v);
    }
}
// solve('cat', 42, function () {console.log('Hello world!');});
solve({ name: 'bob'}, 3.333, 9.999);