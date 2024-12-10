let catFactUrl = "https://catfact.ninja/facts";

async function getCatFact() {
    let res = await fetch(catFactUrl);
    console.log(res);
}
