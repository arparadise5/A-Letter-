const container =
document.getElementById("floating-petals");



function createFloatingPetal(){


const petal =
document.createElement("div");


petal.className =
"floating-petal";


petal.innerHTML =
Math.random() > 0.5 ? "🌸" : "✦";



petal.style.left =
Math.random()*100 + "%";



petal.style.animationDuration =
(8 + Math.random()*8) + "s";



petal.style.fontSize =
(15 + Math.random()*20) + "px";



container.appendChild(petal);



setTimeout(()=>{


petal.remove();


},16000);



}



setInterval(
createFloatingPetal,
700
);