function adder(x) {
    return function (y) {
        console.log(`x: ${x} - y: ${y}`);
        return x + y;
    };
}

const add10 = adder(10)(20);
console.log(add10);
