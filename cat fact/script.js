let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFact(url); 
    let res = document.querySelector("#result");
    res.innerText = fact;
}) 



async function getFact() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        console.log("Error fetching fact: ", e);
        return "no fact was found";
    }
    
}

let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("button");
btn2.addEventListener("click", async () => {
    console.log("btn clicked");
    let res = document.querySelector("#img");
    res.setAttribute("src",link);
}) 
async function getImg() {
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch(e){
        console.log("Error fetching fact: ", e);
        return "no fact was found";
    }
    
}