function solve(inputArray, sortMethod) {

//сортира във възходящ ред
    let ascendingComparator = function (a, b) {
        return a - b;
    };

//сортира във низходящ ред

    let descendingComparator = (a, b)=> {
        return b - a;
    };
//правя обект който да пази двете пропъртита.
    let sortingStrategies = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };
    return inputArray.sort(sortingStrategies[sortMethod])
}
console.log(solve([3, 1, 2, 10], 'asc'));