function sum(...args){
    for(let i = 0; i < args.length; i++){
        console.log("You gave us :", args[i]);
    }
}
// sum(1,2,3,4,5,6,7,8,9,10); 
function square(a,b,c,d){
    console.log(arguments);
}
square(1,2,3,4);