const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.1
});

var fish = document.querySelector(".fish");
var bloom = document.querySelector(".bloom");
var hero = document.querySelector(".hero");
var head = document.querySelector(".head");

var observer = new IntersectionObserver((entitys) => 
{
    if(entitys[0].boundingClientRect.y <0 ){
        fish.classList.add("fishscroll");
        bloom.classList.add("bloomscroll");
        document.body.classList.add("deep")
        return;
    }
    fish.classList.remove("fishscroll");
    bloom.classList.remove("bloomscroll");
    document.body.classList.remove("deep")
}, 
{
    threshold: 1
})

const tank = document.getElementById("aquarium")
console.log(tank)

function setThings() {
    let d = document.documentElement

    d.style.setProperty("--scroll", tank.getBoundingClientRect().y + "px");
    d.style.setProperty("--per", ((d.scrollTop / (d.scrollHeight - d.clientHeight))));
    d.style.setProperty("--heroper", (($(hero).outerHeight(true) / (d.scrollHeight - d.clientHeight))));

    let para = d.scrollTop 
    d.style.setProperty("--paralax", para + "px")
}

lenis.on("scroll", (event) =>{
    setThings();
})

observer.observe(tank);