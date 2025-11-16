let DEFAULT_DIMENSION = 16
let DEFAULT_COLOR = '#000000'
let mouseDown = false

const container = document.querySelector('.container')
const buttonDimension = document.querySelector('.buttonDimension')
const colorPicker = document.querySelector('#colorPicker')
const eraser = document.querySelector('.eraser')
const clearGrid = document.querySelector('.clear')
const colorMode = document.querySelector('.colorMode')





buttonDimension.addEventListener('click', changeGrid)
colorPicker.oninput = (e) => setColor(e.target.value)
eraser.addEventListener('click',erase)
colorMode.addEventListener('click', color)
clearGrid.addEventListener('click', () => {createGrid(DEFAULT_DIMENSION)})
window.addEventListener('load', () => {
   // create default 16x16 grid
    createGrid(DEFAULT_DIMENSION);
});

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
    e.target.style.backgroundColor =  DEFAULT_COLOR;
}

function color(){
    DEFAULT_COLOR = colorPicker.value
}

function erase(){
    DEFAULT_COLOR = 'white'
}

function drawClickHover(e){
    if(mouseDown){
        e.target.style.backgroundColor =  DEFAULT_COLOR;
    }
}

function drawEnd(){
    mouseDown = false
}

function setColor(newColor){
    DEFAULT_COLOR = newColor
}

function changeGrid(){
    number = prompt("Enter the number of squares per side for the new grid:")
    while(number > 100){
        number = prompt("Enter the number of squares per side for the new grid \n (Number must be less than or equal to 100):")
    }
    if(number === ""){
        number = DEFAULT_DIMENSION
    }
    DEFAULT_DIMENSION = number
    createGrid(DEFAULT_DIMENSION)
}

