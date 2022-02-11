import string from './css.js';
// import text from 'text.js'//
console.log(string);
let demo1 = document.querySelector("#demo1")
let demo2 = document.querySelector("#demo2")
let n = 0;
let btnPause = document.querySelector("#btnPause")
let btnPlay = document.querySelector("#btnPlay")
let btnFast = document.querySelector("#btnFast")
let btnNormal = document.querySelector("#btnNormal")
let btnSlow = document.querySelector("#btnSlow")

const run = () => {
    demo1.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    n = n + 1;
    demo1.scrollTop = demo1.scrollHeight
    if (n === string.length)
        clearInterval(id)
}
let id = setInterval(run, 10)
btnPause.onclick = () => {
    clearInterval(id)
}
btnPlay.onclick = () => {
    clearInterval(id)
    id = setInterval(run, 10)
}
btnFast.onclick = () => {
    clearInterval(id)
    id = setInterval(run, 0)
}
btnNormal.onclick = () => {
    clearInterval(id)
    id = setInterval(run, 50)
}
btnSlow.onclick = () => {
    clearInterval(id)
    id = setInterval(run, 200)
}
