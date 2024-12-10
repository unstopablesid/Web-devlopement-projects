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