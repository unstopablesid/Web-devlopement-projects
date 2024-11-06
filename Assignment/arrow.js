const arrAverage = (arr) => {
    let sum = 0;
    arr.forEach((num) => {
        sum += num;
    });
    return sum / arr.length;
}
console.log(arrAverage([10, 20, 30, 40, 50]));