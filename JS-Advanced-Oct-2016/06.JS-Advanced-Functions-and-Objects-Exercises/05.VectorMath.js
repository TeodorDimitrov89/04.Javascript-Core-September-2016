(function solution() {
    return {
        add: (arr1, arr2) => {
            // return arr.map((a, i) => a + arr1[i]);
            let result = [];
            result[0]=arr1[0]+arr2[0];
            result[1]=arr1[1]+arr2[1];
            return result
        },
        multiply:(arr,num)=>{
           // return arr.map((a,i) => a * num);
           let result = [];
            result[0] = arr[0] * num;
            result[1] = arr[1] * num;
            return result;
        },

        length:(arr1, arr2)=> {
            let result= Math.sqrt(arr1[0]*arr1[0]+arr1[1]*arr1[1]);
            return result;
        },

        dot:(arr1,arr2) => {
            return arr1[0]*arr2[0] + arr1[1] * arr2[1];
        },
        cross:(arr,arr1)=> {
            return arr[0] * arr1[1] - arr[1] * arr1[0];
        }
    }
}());

// console.log(solution.add([1, 1], [1, 0]));
// console.log(solution.multiply([3.5, -2], 2));
// console.log(solution.length([3, -4]));
// console.log(solution.dot([1, 0], [0, -1]));
// console.log(solution.cross([3, 7], [1, 0]));