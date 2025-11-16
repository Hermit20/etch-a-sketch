const container = document.querySelector('.container');
let mouseDown = false


function createGrid(size) {
    // Clear previous grid
    container.innerHTML = '';

    // Calculate width/height for each square
    const squareSize = 960 / size;

    // Create squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('baseGrid');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mousedown', drawClick)
        square.addEventListener('mouseenter', drawClickHover)
        square.addEventListener('mouseup', drawEnd)
        container.appendChild(square);
    }
}


function drawClick(e){
    mouseDown = true;
    e.target.style.backgroundColor = 'black';
}

function drawClickHover(e){
    if(mouseDown){
        e.target.style.backgroundColor = 'black';
    }
}

function drawEnd(){
    mouseDown = false
}


window.addEventListener('load', (event) => {
   // create default 16x16 grid
    createGrid(16);
});