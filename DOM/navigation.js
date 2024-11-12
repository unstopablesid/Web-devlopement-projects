let para = document.createElement('p');
para.innerText = "All code are comment out";
document.querySelector('body').append(para);
para.classList.add('red');

let h3 = document.createElement('p');
h3.innerText = "this is Heading";
document.querySelector('body').append(h3);
h3.classList.add('blue');

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "This is heading";
para2.innerText = "This is paragraph";
div.append(h1);
div.append(para2);
div.classList.add('box');
document.querySelector('body').append(div);