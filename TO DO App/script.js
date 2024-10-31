let toda = [];
let req =  prompt("Enter the request:");
while(req !== "quit"){
    if(req === "new"){
        let todo = prompt("Enter the new todo:");
        toda.push(todo);
        console.log("Added todo");
    }else if(req === "list"){
        console.log("**********");
        toda.forEach(function(todo, i){
            console.log(`${i}: ${todo}`);
        });
        console.log("**********");
    }else if(req === "delete"){
        let index = parseInt(prompt("Enter the index of the todo to delete:"));
        toda.splice(index, 1);
        console.log("Deleted todo");
    }
    req =  prompt("Enter the request:");
}