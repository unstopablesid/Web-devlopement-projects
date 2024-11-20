let gameSeq = [];
let userSeq = []; 

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red", "green", "blue", "yellow"];

document.addEventListener("keypress", function(){
    if (started === false) {
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
function userFlash(btn){
    btn.classList.add("user");
    setTimeout(function(){
        btn.classList.remove("user");
    }, 250);
}

function levup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let random = Math.floor(Math.random() * 4);
    let randomColor = btns[random];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);

    btnflash(randomBtn);
}

function check(index) {
        // let index = level - 1;
        if (userSeq[index] == gameSeq[index]) {
            if (userSeq.length == gameSeq.length) {
                userSeq = [];
                setTimeout(function(){
                    levup();
                }, 250);
            }
        } else {
            h2.innerHTML = `Game Over your score is ${level}<br> Press any key to restart`;
            gameSeq = [];
            userSeq = [];
            level = 0;
            started = false;
        }

}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length - 1);
}
let btnall = document.querySelectorAll(".btn");
for (let btn of btnall) {
    btn.addEventListener("click", btnPress);
}