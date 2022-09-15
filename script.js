const sketchContainer = document.querySelector('.sketch-container');
const btnSmallPixel = document.querySelector('#pixel-small');
const btnMidPixel = document.querySelector('#pixel-mid');
const btnBigPixel = document.querySelector('#pixel-big');
const btnRainbow = document.querySelector('#btn-rainbow');
const btnEraser = document.querySelector('#btn-eraser');
const btnBlack = document.querySelector('#btn-black');
const defaultSize = 8;
const defaultMode = 'black';
let mode = defaultMode;

btnSmallPixel.addEventListener('click', () => createGrid(32));
btnMidPixel.addEventListener('click', () => createGrid(16));
btnBigPixel.addEventListener('click', () => createGrid(8));
btnBlack.addEventListener('click', () => setMode('black'));
btnRainbow.addEventListener('click', () => setMode('rainbow'));
btnEraser.addEventListener('click', () => setMode('eraser'));

function createGrid(size) {
    sketchContainer.innerHTML = '';
    let squareCount = size ** 2;
    sketchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(i=0; i<squareCount; i++) {
        let newSquare = document.createElement('div');
        newSquare.classList.add('square');
        sketchContainer.appendChild(newSquare);
    }
}

function setMode(newMode) {
    mode = newMode;
    draw();
}

function randomNumber(max) {
    return Math.floor((Math.random()) * max);
}

function draw() {

    if(mode === 'black') {
        sketchContainer.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = `rgb(0, 0, 0)`;
        })
    } else if (mode === 'rainbow') {
        sketchContainer.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
        })
    } else if (mode === 'eraser') {
        sketchContainer.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = `rgb(255, 255, 255)`;
        })
    }
}

createGrid(defaultSize);
draw();