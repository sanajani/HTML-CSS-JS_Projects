let counter = document.querySelector(".counter");
let numbers = document.querySelectorAll(".numbers span");
let finalMessage = document.querySelector(".final");
let replay = document.querySelector("#replay");

runAnimation();

function resetDOM() {
    counter.classList.remove('hide');
    finalMessage.classList.remove('show');
    numbers.forEach((number) =>{
        number.classList.value = ''
    })
    numbers[0].classList.add('in')
    
}

function runAnimation() {
    numbers.forEach((number,index) => {
        const nextToLast = numbers.length - 1
        
        number.addEventListener("animationend",(e)=>{
            if(e.animationName === "goIn" && index !== nextToLast){
            console.log(2);
                number.classList.remove('in');
                number.classList.add('out');
            }else if(e.animationName === "goOut" && number.nextElementSibling){
            console.log(3);

                number.nextElementSibling.classList.add("in")
            }else{
            console.log(4);

                counter.classList.add('hide')
                finalMessage.classList.add("show")
            }
        })
    })
}

replay.addEventListener('click',()=>{
    resetDOM();
    runAnimation()
})