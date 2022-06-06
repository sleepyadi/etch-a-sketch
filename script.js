const canvas = document.querySelector('.canvas');
const gridSizeBtn = document.querySelector('.grid-size');
const clearBtn = document.querySelector('.clear');
const blackBtn = document.querySelector('.black');
const eraserBtn = document.querySelector('.eraser');

const WHITE = 'white';
const BLACK= 'black';
let penColor = BLACK;
let isMouseDown = false;
let gridSize = 20;

function createGrid(containerNode, grids=20) {
    
    let h = Number(containerNode.offsetHeight) / grids;
    let w = Number(containerNode.offsetWidth) / grids;

    for (let i = 0; i < grids; i++) {

        let colDiv = document.createElement('div');
        colDiv.classList.add('col');

        for (let j = 0; j < grids; j++) {
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            rowDiv.style.height = h + 'px';
            rowDiv.style.width = w + 'px';
            colDiv.appendChild(rowDiv);
        }
        containerNode.appendChild(colDiv);
    }
}

function draw(event) {

    if (event.target.getAttribute('class').includes('row') && isMouseDown) {
        event.target.style.backgroundColor = penColor;
    }
}

function linkGridEvents() {
    const rows = document.querySelectorAll('.row');

    rows.forEach((row) => {
        
        row.addEventListener('mouseover', draw);
    })

}


function setupGrid(containerNode, gridSize) {
    containerNode.textContent = '';
    createGrid(canvas,gridSize);
    linkGridEvents();
}


// check for mouse down and up
window.addEventListener('mousedown', () => {
    isMouseDown = true;
})

window.addEventListener('mouseup', () => {
    isMouseDown = false;
})

function getGridSize(msg) {
    let gSize = Number(prompt(msg));
    if (isNaN(gSize)) {
        return gridSize
    } else {
        return gSize;
    }
}


gridSizeBtn.addEventListener('click', () => {
    gridSize = getGridSize('Input Size of grid(square):');
    setupGrid(canvas, gridSize);
})

clearBtn.addEventListener('click', () => {
    setupGrid(canvas, gridSize);
})

blackBtn.addEventListener('click', () => {
    penColor = BLACK;
})

eraserBtn.addEventListener('click', () => {
    penColor = WHITE;
})


