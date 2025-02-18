const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.1
});

var fish = document.querySelector(".fish");
var bloom = document.querySelector(".bloom");
var hero = document.querySelector(".hero");
var head = document.querySelector(".head");
var headimg = document.querySelector(".headimg");
var nav = document.querySelector(".navbar");
var bg = document.querySelector(".bg");
let burg = document.querySelector(".bartitle");

var observer = new IntersectionObserver((entitys) => 
{
    if(entitys[0].boundingClientRect.y <0 ){
        fish.classList.add("fishscroll");
        bloom.classList.add("bloomscroll");
        bg.classList.add("deep");
        burg.classList.add("bartitleon")
        return;
    }
    fish.classList.remove("fishscroll");
    bloom.classList.remove("bloomscroll");
    bg.classList.remove("deep")
    burg.classList.remove("bartitleon")
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


function setThings() {
    
    let d = document.documentElement;
    let per = ((d.scrollTop / (d.scrollHeight - d.clientHeight)));

    fish.style.setProperty("--scroll", tank.getBoundingClientRect().y + "px");
    bloom.style.setProperty("--scroll", tank.getBoundingClientRect().y + "px");
    
    fish.style.setProperty("--per", per);
    bloom.style.setProperty("--per", per);
    nav.style.setProperty("--per", per);
    bg.style.setProperty("--per", per);
    head.style.setProperty("--per", per);
    headimg.style.setProperty("--per", per);
}

let setthr = throttle(setThings,3)

lenis.on("scroll", (event) =>{
    setthr();
})

addEventListener("resize", ()=>
    {
        let nav = document.querySelector(".navbar");
        let body = document.querySelector("body");
        
        nav.style.height = '0%';         
        body.style.overflow = "auto";
        body.style.height = "auto";
        lenis.start();
        nav.style.padding = "0px 0px 0px";
        d.style.setProperty("--heroper", (($(hero).outerHeight(true) / (d.scrollHeight - d.clientHeight))));
    })

observer.observe(tank);
d.style.setProperty("--heroper", (($(hero).outerHeight(true) / (d.scrollHeight - d.clientHeight))));