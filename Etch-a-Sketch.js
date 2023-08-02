const sketchPad = document.getElementById('sketch_pad');
// CREATING SQUARE(div with class) inside *sketchPad with tale-green color(16-16px) border:5% to make it look like a square.
 const inputSquareSize = 30; // i will input it with user interface later!!

const amount = Math.floor((360000)/(inputSquareSize**2));//if amount is a natural number then choose; else if amou
 // implement: inputs for the element

 for ( i = 1; i<=amount; i++) {
    const square = document.createElement('div');     
           square.setAttribute('class','square');
           square.style.cssText = `height: ${inputSquareSize}px; width:${inputSquareSize}px;border:1px black solid; box-sizing:border-box;` ;
           sketchPad.appendChild(square);  
}





// another......
//create hover effect when mouse go to each square
const inputColor = 'orange'
const squares = document.querySelectorAll('.square');
function changeColor(e) { 
   // const inputColor= 'orange';
   
   e.target.style.cssText = "background-color: rgba(0, 0, 255, 0.58)"
   // something's wrong here that the code doesn't change color 
}
for (square of squares) {
   square.addEventListener('mouseover',changeColor);
}