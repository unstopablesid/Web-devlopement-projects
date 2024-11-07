let arr = [1,52,5,6,8,4];
let isEven = arr.some((num) => {
    return num % 2 === 0;
});
console.log(isEven); // false