class SortedList {
    constructor() {
        // this.sortedList = {};
        this.list = [];
        this.size = 0;
    }
    add(element) {
        this.list.push(element);
        this.size = this.list.length;
        return this.list.sort((a, b) => a - b);
    }
    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error;
        }else{
            this.list.splice(index, 1);
            this.size--;
            return this.list.sort((a, b)=> a - b);
        }
    }
    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error;
        }else{
            return this.list[index];
        }
    }
}



let sortedArr = new SortedList();
sortedArr.add(5);
sortedArr.add(-250);
sortedArr.add(0);
sortedArr.add(15);
sortedArr.remove(2);
sortedArr.remove(2);
sortedArr.get(0);
sortedArr.add(-32423);
sortedArr.add(32);
console.log(sortedArr);
console.log(sortedArr.get(2));
// function solve() {
//     let sortedList = {};
//     sortedList.list = [];
//     sortedList.size = 0;
//     sortedList.add = function (element) {
//         sortedList.list.push(element);
//         sortedList.size = sortedList.list.length;
//         return sortedList.list.sort((a, b)=> a - b);
//     };
//     sortedList.remove = function (index) {
//         if (index < 0 || index >= sortedList.list.length) {
//             throw new Error;
//         }else{
//             sortedList.list.splice(index, 1);
//             sortedList.size = sortedList.list.length;
//             return sortedList.list.sort((a, b)=> a - b);
//         }
//     };
//     sortedList.get = function (index) {
//         return sortedList.list[index];
//     };
//     return sortedList;
// }

