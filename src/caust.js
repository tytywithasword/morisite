var elem = document.getElementsByClassName("caustics")[0];
var frame = 1;
let dir = false; 
console.log(elem);


function changeFrame() 
{
    if(frame == 32){frame = 0;}
    elem.style.setProperty("--frame-offset", frame*160 + "vh")
    frame++;
    setTimeout (function() {requestAnimationFrame(changeFrame);}, "50");
}
requestAnimationFrame(changeFrame);

