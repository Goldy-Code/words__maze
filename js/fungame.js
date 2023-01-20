const container = document.querySelector('.container');
const play = document.querySelector('.play');
const screamer = document.querySelector('.screamer');

window.addEventListener('mouseover', () => {
    theGame.classList.remove('gameStart');
    container.style = '  border: 1px solid black;';
});
window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
container.addEventListener('mouseover', (e) => {
    e.stopPropagation();
});




function fnaf() {
    let audio = new Audio('sounds/fnaf.mp3');
    audio.play();
}

const theGame = document.querySelector('.theGame');
const box = document.querySelectorAll('.box');

box.forEach((el) => {
    el.addEventListener('mouseover', () => {
        theGame.classList.remove('gameStart');
        container.style = 'border: 1px solid black;';
        screamer.classList.add('gameStart');
        fnaf();

        setTimeout(() => {
            screamer.classList.remove('gameStart');
        }, 4000)
    });
});


play.addEventListener('click', () => {
    theGame.classList.add('gameStart');
    container.style = 'border: none';
});


