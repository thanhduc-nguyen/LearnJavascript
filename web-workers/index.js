// This way needs a server to run
//const worker = new Worker("worker.js");

const worker = new Worker(
    URL.createObjectURL(new Blob(["(" + worker_function.toString() + ")()"], { type: "text/javascript" }))
);
const sumBtn = document.querySelector("#sumBtn");
const bgBtn = document.querySelector("#bgBtn");

sumBtn.addEventListener("click", (event) => {
    worker.postMessage("Hello, worker");
});

bgBtn.addEventListener("click", (event) => {
    if (document.body.style.background !== "green") {
        document.body.style.background = "green";
    } else {
        document.body.style.background = "blue";
    }
});

worker.onmessage = function (message) {
    alert(`The final sum is ${message.data}`);
};
