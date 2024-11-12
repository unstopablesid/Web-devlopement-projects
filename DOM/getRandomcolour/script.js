let btn = document.querySelector('button');


btn.addEventListener('click', function() {
// alert("Color Generated");
let color = getRandomColor();
let h3 = document.querySelector('h3');
h3.innerText = color;
});
btn.onclick = function() {
let box = document.querySelector('div');
box.style.backgroundColor = getRandomColor();};

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
