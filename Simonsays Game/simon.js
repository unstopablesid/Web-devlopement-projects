let gamearr = [];
let playerarr = []; 

let started = false;
let level = 0;

document.addEventListener("keypress", function() {
    if (!started) {
        nextSequence();
        started = true;
    }
});