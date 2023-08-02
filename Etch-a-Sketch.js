const sketchPad = document.getElementById('sketch_pad');
const squareRange = document.getElementById('square_range');
const colorPicker = document.getElementById('color_picker');
let inputSquareSize = 30;
const squareRangeDisplay = document.getElementById('square_range_display');

function createGrid() {
   // remove all existing squares
   while (sketchPad.firstChild) {
       sketchPad.removeChild(sketchPad.firstChild);
   }

   // calculate number of squares that fit into sketch pad
   let numSquares = Math.floor(sketchPad.clientWidth / inputSquareSize);

   // adjust margin of squares if they don't fit perfectly
   if (numSquares * inputSquareSize < sketchPad.clientWidth) {
       let margin = Math.floor((sketchPad.clientWidth - numSquares * inputSquareSize) / (2 * numSquares));
       for (let i = 1; i <= numSquares * numSquares; i++) {
           const square = document.createElement('div');
           square.setAttribute('class','square');
           square.style.cssText = `height: ${inputSquareSize}px;
                                   width:${inputSquareSize}px;border:1px black solid; box-sizing:border-box;
                                   margin:${margin}px;`;
           sketchPad.appendChild(square);
       }
   } else {
       for (let i = 1; i <= numSquares * numSquares; i++) {
           const square = document.createElement('div');
           square.setAttribute('class','square');
           square.style.cssText = `height: ${inputSquareSize}px; width:${inputSquareSize}px;border:1px black solid; box-sizing:border-box;`;
           sketchPad.appendChild(square);
       }
   }

   // add hover effect to new squares
   addHoverEffect();
   
}
//create a function that add capicity gradually in color :


function addHoverEffect() {
    let mouseDown = false;
    const squares = document.querySelectorAll('.square');
    function mouseDownHandler() {
        return mouseDown = true;
    }
    function mouseUpHandler() {
        return mouseDown = false;
    }

    let rainbowModeValue = false;
    const rainbowMode = document.getElementById('rainbow_mode');
    rainbowMode.addEventListener('click', () => {
        if (rainbowMode) {
            rainbowModeValue = true;
        } else {
            rainbowModeValue = false;
        }
    });

    function changeColor(e) {
      e.preventDefault();
      const rainbowColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
      if(mouseDown && rainbowModeValue) {
          e.target.style.backgroundColor = rainbowColor;
      } else if (mouseDown) {
          let currentColor = e.target.style.backgroundColor;
          if (currentColor === '') {
              e.target.style.backgroundColor = colorPicker.value;
              e.target.style.opacity = 0.1;
          } else {
              let currentOpacity = parseFloat(e.target.style.opacity);
              if (currentOpacity < 1) {
                  let newOpacity = Math.min(currentOpacity + 0.1, 1);
                  e.target.style.opacity = newOpacity;
              }
          }
      }
  }
    for (let square of squares) {
        square.addEventListener('mousedown',changeColor);
        square.addEventListener('mousedown',mouseDownHandler);
        square.addEventListener('mouseup',mouseUpHandler);
        square.addEventListener('mouseover',changeColor);
    }
}

// create initial grid
createGrid();

// update grid when squareRange input is adjusted
squareRange.addEventListener('input', () => {
    inputSquareSize = squareRange.value;
    squareRangeDisplay.innerText = `Square Size: ${inputSquareSize}`;
    createGrid();
});
