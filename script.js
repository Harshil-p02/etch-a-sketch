const setSize = document.querySelector('#size');
const resetSize = document.querySelector('#reset');

let grid = document.querySelector('.grid');
let cell;
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
    
}

function resetGridSize() {
    removeDivFromGrid();

    for (let i = 0; i < 16*16; i++) {
        cell = document.createElement('div');
        cell.setAttribute('id', 'cell');
        grid.appendChild(cell);
    }
    grid.style.cssText = 'grid-template-rows: repeat(16, 1fr); grid-template-columns: repeat(16, 1fr)';
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

const selectedDiv = document.querySelectorAll('#cell');
console.log(selectedDiv);
selectedDiv.forEach(function(selectedDiv) {
    selectedDiv.addEventListener('mouseover', function() {
        selectedDiv.style.backgroundColor = getRandomColor();
    })
})

function getRandomColor() {
    let digits = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += digits[Math.floor(Math.random() * 16)];
    }
    
    console.log(color);
    return color;
}




/*const grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row')
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement('div')
        cell.setAttribute('id', 'cell');
        row.appendChild(cell);
    }
    grid.appendChild(row);
}*/