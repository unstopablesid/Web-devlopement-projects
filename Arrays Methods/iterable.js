let arr = [1,52,5,6,8,4];
function func(...arr){
    console.log(Math.min(...arr));
    console.log(arr);
}
func(...arr); // [1, 52, 5, 6, 8, 4]
console.log(...arr);
console.log(...("Mayur"));