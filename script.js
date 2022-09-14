const sketchContainer = document.querySelector('.sketch-container');
let rows = 1;
let squareCount = rows**2;
let cssText = "";


for(i=0; i<rows; i++) {
    cssText += "1fr ";
    sketchContainer.style.gridTemplateColumns = cssText;
}

for(i=0; i<squareCount; i++) {
    let  newSquare = document.createElement('div');
    newSquare.classList.add('square');
    sketchContainer.appendChild(newSquare);
   
}