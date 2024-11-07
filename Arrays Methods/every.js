let arr = [1,52,5,6,8,4];
let isEven = arr.every((num) => {
    return num % 2 === 0;
});
console.log(isEven); // false