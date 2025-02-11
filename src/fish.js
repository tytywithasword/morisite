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

    let bgRatio = (tank.getBoundingClientRect().y / $(hero).outerHeight(true))
    let caustRatio = ((d.scrollTop / (d.scrollHeight - d.clientHeight)) -1) * -1;
    let para = d.scrollTop 
    document.querySelector(".caustics").style.setProperty("--op", Math.max(0, ((caustRatio))) * 70 + 20 + "%")
    d.style.setProperty("--paralax", para + "px")
    if(bgRatio >=0){
        d.style.setProperty("--bg-ratio", Math.max(0, (bgRatio)) *100 + "%");
        return;
    }
    bgRatio = (tank.getBoundingClientRect().y / $(fish).outerHeight(true))
    d.style.setProperty("--bg-ratio", bgRatio * 100 *-1 + "%");
       
}

lenis.on("scroll", (event) =>{
    setThings();
})

observer.observe(tank);