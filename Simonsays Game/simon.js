let gamearr = [];
let playerarr = []; 

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red", "green", "blue", "yellow"];

document.addEventListener("keypress", function(){
    if (started == false) {
        // nextSequence();
        console.log("Game Started");
        started = true;
        levup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 350);
}
function Userflash(btn){
    btn.classList.add("user");
    setTimeout(function(){
        btn.classList.remove("user");
    }, 250);
}

function levup() {
    level++;
    h2.innerText = `Level  ${level}`;
    let random = Math.floor(Math.random() * 4);
    let randomColor = btns[random];
    let randomBtn = document.querySelector(`.${randomColor}`);
    console.log(randomBtn);
    console.log(randomColor);
    console.log(random);
    //random button
    btnflash(randomBtn);
}

function btnPress() {
    let btn = this;
    Userflash(btn);
}
let btnall = document.querySelectorAll(".btn");
for (btns of btnall) {
    btns.addEventListener("click", btnPress);
}