let arr = [50,25,63,44];

let squaredSum = arr.map(x => x * x).reduce((acc, val) => acc + val, 0);
let average = squaredSum / arr.length;
console.log(average);