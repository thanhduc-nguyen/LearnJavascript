/*What does 'hoisting' mean?
Hoisting is JavaScript's default behavior of moving variable declarations (NOT initializations)
to the top of the current scope (either to the top of the script or top of the current function).
Variables and constants declared with let or const are not hoisted.
Hoisting is (to some developers) an unknown or overlooked behavior of JavaScript.
To avoid bugs, you should consider declaring your variables at the beginning of every scope.
*/

console.log(5);
x = 5;

function A() {
    var y;
    console.log(y);
    y = 10;
}

A();
