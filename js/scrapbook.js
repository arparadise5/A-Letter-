
const pages =
document.querySelectorAll(".memory-page");


let currentPage = 0;



function createPetals(){


for(let i=0;i<15;i++){


let petal =
document.createElement("div");


petal.className="petal";


petal.innerHTML =
Math.random() > 0.5 ? "🌸" : "✦";


petal.style.left =
Math.random()*100+"%";


petal.style.top =
"70%";


document
.getElementById("petals")
.appendChild(petal);



setTimeout(()=>{

petal.remove();

},1500);


}


}





function changePage(newPage){


pages[currentPage]
.classList.add("fade");


createPetals();



setTimeout(()=>{


pages[currentPage]
.classList.remove("active");


currentPage = newPage;



pages[currentPage]
.classList.remove("fade");


pages[currentPage]
.classList.add("active");



},800);



}






function nextPage(){


if(currentPage < pages.length-1){


changePage(currentPage+1);


}


}





function previousPage(){


if(currentPage > 0){


changePage(currentPage-1);


}


}






document.addEventListener(
"wheel",
(e)=>{


if(e.deltaY > 0){

nextPage();

}



if(e.deltaY < 0){

previousPage();

}



});
let touchStart = 0;


document.addEventListener(
"touchstart",
(e)=>{


touchStart =
e.touches[0].clientY;


});



document.addEventListener(
"touchend",
(e)=>{


let touchEnd =
e.changedTouches[0].clientY;



if(touchStart - touchEnd > 50){

nextPage();

}



if(touchEnd - touchStart > 50){

previousPage();

}



});