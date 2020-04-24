let grid = document.querySelector('.grid');
const setSize = document.querySelector('#size');
const resetSize = document.querySelector('#reset');

let cell;
let colorOption = document.getElementById('colorOption');

colorOption.addEventListener('change', setColor);

function setColor() {
    let choice = colorOption.value;
    console.log(choice);
    if (choice === 'black') {
        color = getBnWColor();
    } else if (choice === 'random') {
        color = getRandomColor();
    } else {
        color = getHSLRandomColor();
    }
    return color;
}

for (let i = 0; i < 16*16; i++) {
    cell = document.createElement('div');
    cell.setAttribute('id', 'cell');
    
    grid.appendChild(cell);
}

setSize.addEventListener('click', changeGridSize);
resetSize.addEventListener('click', resetGridSize);

function changeGridSize() {
    n = prompt('What size grid do you want?');
    removeDivFromGrid();
    
    for (let i = 0; i < n*n; i++) {
        cell = document.createElement('div');
        cell.setAttribute('id', 'cell');
        grid.appendChild(cell);
    }
    grid.style.cssText = `grid-template-rows: repeat(${n}, 1fr); grid-template-columns: repeat(${n}, 1fr)`;
    displayColors();
}

function resetGridSize() {
    removeDivFromGrid();

    for (let i = 0; i < 16*16; i++) {
        cell = document.createElement('div');
        cell.setAttribute('id', 'cell');
        grid.appendChild(cell);
    }
    grid.style.cssText = 'grid-template-rows: repeat(16, 1fr); grid-template-columns: repeat(16, 1fr)';
    displayColors();
}

grid.addEventListener('click', (e) => console.log(e));

function removeDivFromGrid() {
    while (true) {
        let div = document.querySelector('#cell');
        if (grid.contains(div)) {
            grid.removeChild(div);
        } else {
            break;
        }
    }
}

function displayColors() {
    const selectedDiv = document.querySelectorAll('#cell');
    console.log(selectedDiv);
    selectedDiv.forEach(function(selectedDiv) {
        selectedDiv.addEventListener('mouseover', function() {
            selectedDiv.style.backgroundColor = setColor();
        })
    })
}



function getRandomColor() {
    let digits = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += digits[Math.floor(Math.random() * 16)];
    }
    
    console.log(color);
    return color;
}

function getBnWColor() {
    return 'black';
}

function getHSLRandomColor() {
    let hue = Math.floor(Math.random() * 360);
    let saturation = 100;
    let lightness = 80
    for (let i = 0; i < 6; i++) {

    }
}

displayColors();