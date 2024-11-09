let arr = ["mayur", "karan", "jay", "vijay"];
function doubleAndReturnArgs(arr, ...args) {
    const doubledArgs = args.map(arg => arg * 2);
    return [...arr, ...doubledArgs];
}
console.log(doubleAndReturnArgs(arr, 1, 2, 3)); // ["mayur", "karan", "jay", "vijay", 2, 4, 6]