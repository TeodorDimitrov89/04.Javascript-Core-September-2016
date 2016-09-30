function aggregateElements(input) {
    let elements = input.map(Number);
    aggregate(elements,0,(a,b) => a + b);
    aggregate(elements,0,(a,b) => a + 1 / b);
    aggregate(elements,'',(a,b)=> a + b);

    function aggregate(array,initialVal,func) {
        let val = initialVal;
        for (let i = 0; i < array.length; i++) {
            val = func(val,array[i]);
        }
        console.log(val);
    }
}

aggregateElements(['1', '2', '3','4','8']);
