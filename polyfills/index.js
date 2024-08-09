const arr = [1, 2, 3, 4];

Array.prototype.forEach = null;

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callBack) {
        for (let val of this) {
            callBack(val);
        }
    };
}

arr.forEach((val) => {
    console.log(val * 2);
});
