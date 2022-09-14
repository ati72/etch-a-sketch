const sketchContainer = document.querySelector('.sketch-container');
const btnSmallPixel = document.querySelector('#pixel-small');
const btnMidPixel = document.querySelector('#pixel-mid');
const btnBigPixel = document.querySelector('#pixel-big');
let rows = 8;
let squareCount = rows**2;
let cssText = "";

btnMidPixel.addEventListener('click', () => {
    rows = 16;
    cssText = "";
    sketchContainer.style.gridTemplateColumns = cssText;

    for(i=0; i<rows; i++) {
        cssText += "1fr ";
        sketchContainer.style.gridTemplateColumns = cssText;
    }
    
    for(i=0; i<squareCount; i++) {
        let  newSquare = document.createElement('div');
        newSquare.classList.add('square');
        sketchContainer.appendChild(newSquare);
    }
});

/* function pixelSize(button) {
    if (button.value === "Big") rows = 8;
    else if (button.value === "Medium") rows = 16;
    else if (button.value === "Small") rows = 32;
}
 */

/* rowRange.addEventListener("input", () => {
    rows = rowRange.valueAsNumber;
    sketchContainer.style.gridTemplateColumns = "";
    cssText = "";
    console.log(rows);


    for(i=0; i<rows; i++) {
       
        cssText += "1fr ";
        console.log(cssText);
        sketchContainer.style.gridTemplateColumns = cssText;
    }
    
    for(i=0; i<squareCount; i++) {
        let  newSquare = document.createElement('div');
        newSquare.classList.add('square');
        sketchContainer.appendChild(newSquare);
    }

}) */

for(i=0; i<rows; i++) {
    cssText += "1fr ";
    sketchContainer.style.gridTemplateColumns = cssText;
}

for(i=0; i<squareCount; i++) {
    let  newSquare = document.createElement('div');
    newSquare.classList.add('square');
    sketchContainer.appendChild(newSquare);
}

