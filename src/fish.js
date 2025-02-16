const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.1
});

var fish = document.querySelector(".fish");
var bloom = document.querySelector(".bloom");
var hero = document.querySelector(".hero");
var head = document.querySelector(".head");
var nav = document.querySelector(".navbar");
var bg = document.querySelector(".bg");

var observer = new IntersectionObserver((entitys) => 
{
    if(entitys[0].boundingClientRect.y <0 ){
        fish.classList.add("fishscroll");
        bloom.classList.add("bloomscroll");
        bg.classList.add("deep")
        return;
    }
    fish.classList.remove("fishscroll");
    bloom.classList.remove("bloomscroll");
    bg.classList.remove("deep")
}, 
{
    threshold: 1
})

const tank = document.getElementById("aquarium")
console.log(tank)

function throttle(fn, delay) {
    let isThr = false;

    return function (...args) {
        if (!isThr) {
            fn.apply(this, args);
            isThr = true;

            setTimeout(() => {
                isThr = false;
            }, delay);
        }
    };
}

let d = document.documentElement;
d.style.setProperty("--heroper", (($(hero).outerHeight(true) / (d.scrollHeight - d.clientHeight))));


function setThings() {
    
    let d = document.documentElement;

    fish.style.setProperty("--scroll", tank.getBoundingClientRect().y + "px");
    bloom.style.setProperty("--scroll", tank.getBoundingClientRect().y + "px");
    nav.style.setProperty("--per", ((d.scrollTop / (d.scrollHeight - d.clientHeight))));
    bg.style.setProperty("--per", ((d.scrollTop / (d.scrollHeight - d.clientHeight))));
}

let setthr = throttle(setThings,10)

lenis.on("scroll", (event) =>{
    setthr();
})

observer.observe(tank);
