const sketchPad = document.getElementById('sketch_pad');
// CREATING SQUARE(div with class) inside *sketchPad with tale-green color(16-16px) border:5% to make it look like a square.
 const inputSquareSize = 11; // i will input it with user interface later!!

const amount = Math.floor((360000)/(inputSquareSize**2));//if amount is a natural number then choose; else if amou
 // implement: inputs for the element

 for ( i = 1; i<=amount; i++) {
    const square = document.createElement('div');     
           square.setAttribute('class','square');
           square.style.cssText = `height: ${inputSquareSize}px; width:${inputSquareSize}px;border:1px black solid; box-sizing:border-box;` ;
           sketchPad.appendChild(square);  
}



// deciding how much grid should we create inside the sketchPad( depend on how big each square is we will have less square)
//if there is misscelluous then do what... if that is the perfect  dividation then calculate and input to the sketch pad



// another......