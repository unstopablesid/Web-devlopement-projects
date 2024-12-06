// async function hello(){
//     return "Hello";
    
// }
// let a = hello();
function getno() {
let no = prompt("Enter the number:");
return new Promise ((resolve, reject) => {
    if(no > 10){
        resolve("Greater than 10");
    }else{
        reject("Less than 10");
    }
});
}

async function hello(){
    let a = await getno();
    console.log(a);
}