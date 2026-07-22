
const music =
document.getElementById("background-music");

const envelope = document.getElementById("envelope");

const letter = document.querySelector(".letter");

const letterText = document.querySelector(".letter-text");


function changeScene(oldScene, newScene) {

    document
    .getElementById(oldScene)
    .classList.add("hidden");


    document
    .getElementById(newScene)
    .classList.remove("hidden");

}





// INTRO → ENVELOPE

setTimeout(()=>{


changeScene(
"opening",
"envelope-page"
);


music.volume = 0;


music.play();



let volume = 0;


let fade =
setInterval(()=>{


if(volume < 0.4){


volume += 0.02;


music.volume = volume;


}

else {


clearInterval(fade);


}


},100);



},5000);
const secretStar =
document.getElementById("secret-star");


const secretNote =
document.getElementById("secret-note");



secretStar.addEventListener(
"click",
()=>{


secretNote.classList.add("show");


});






// LETTER TEXT

const text =
`Dear Parmida💫

Now that we've finished our first semester of college, all I can say is...

Wow.

It was filled with so many moments I'll always remember, and so many good things happened along the way.

But if there's one thing I'll always be grateful for this semester, it's meeting you.

You made ordinary days feel brighter, whether we were talking, laughing, playing games, or simply spending time together.

Those moments meant far more to me than you probably realize.

You truly became one of the brightest parts of this chapter of my life.

Thank you for being such an important part of these memories.

I hope we continue making many more together.
`;



let index = 0;



function writeLetter() {


    if(index < text.length) {


        letterText.innerHTML += text[index];


        index++;


        setTimeout(
            writeLetter,
            50
        );


    }

    else {


        // Letter finished

        setTimeout(() => {


            changeScene(
                "letter-page",
                "scrapbook"
            );


        }, 3000);


    }


}






// ENVELOPE CLICK

envelope.addEventListener(
"click",
() => {


    changeScene(
        "envelope-page",
        "letter-page"
    );



    setTimeout(() => {


        letter.classList.add("show");


        writeLetter();


    }, 500);



});