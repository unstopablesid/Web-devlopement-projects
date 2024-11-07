let arr = [1,52,5,6,8,4];

let max = arr.reduce((max,el) => {
    return (el > max) ? el : max;
});
console.log(max); // 52