let p1 = new Promise(
    function (resolve, reject) {
        console.log("task started.");
        setTimeout(function () {
            resolve('task result');
            console.log("task finished");
        }, 1000)
    });
let p2 = new Promise(
    function (resolve, reject) {
        console.log("task2 started.");
        setTimeout(function () {
            resolve('task2 result');
            console.log("task2 finished");
        }, 500)
    });

let p3 = new Promise(
    function (resolve, reject) {
        console.log("task3 started.\n");
        setTimeout(function () {
            resolve('task3 result');
            console.log("task3 finished\n");
        }, 1500)
    });

Promise.all([p1,p2,p3])
    .then(function (result) {
        console.log(result);
        console.log("All tasks finished.");
        // nonExistingFunction();
        console.log("Result " + result.join(', '))
    })
    .catch(function (error) {
        console.log("Some of tasks failed");
    });