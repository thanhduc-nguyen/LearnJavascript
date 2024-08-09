function Add(x, y) {
    return x + y;
}

const Logger = function (func) {
    return function (x, y) {
        console.log(`The arguments are ${x} and ${y}`);
        return func(x, y);
    };
};

Add = Logger(Add);
console.log(Add(2, 3));
