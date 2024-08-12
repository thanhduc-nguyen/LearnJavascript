const worker_function = function (message) {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
        sum += i;
    }

    this.postMessage(sum);
};

// This is in case of normal worker start
// "window" is not defined in web worker
// so if you load this file directly using `new Worker`
// the worker code will still execute properly
if (window != self) {
    worker_function();
}

// This way needs a server to run
// self.onmessage = function (message) {
//     let sum = 0;
//     for (let i = 0; i < 10000000000; i++) {
//         sum += i;
//     }

//     this.postMessage(sum);
// };
