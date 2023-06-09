const text_effect = document.querySelector(".text-effect");
const speedEl = document.querySelector('#number');

let text = "We Love Programming";
let index = 1;

let speed = 500 / 1;

text_auto_effect();
function text_auto_effect() {
    text_effect.innerHTML = text.slice(0,index);
    index++
    if(index > text.length){
        index = 1
    }
    setTimeout(text_auto_effect,speed );
}

speedEl.addEventListener("input",e => speed = 500 / e.target.value)