function sumOfNnumbers(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum= i+sum;
    }
    return sum;
}


console.log(sumOfNnumbers(10)); // 15