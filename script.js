// Add a dropdown menu for grid size for some default sizes
// Add a customize size option also

const grid = document.querySelector('.grid');
let cell;
const gridSize = document.getElementById('gridSize');
const resetSize = document.querySelector('#reset');
const colorOption = document.getElementById('colorOption');
let colorArray = [];


gridSize.addEventListener('change', changeGridSize);
resetSize.addEventListener('click', resetGridSize);
colorOption.addEventListener('change', setColor);


function setColor() {
    let choice = colorOption.value;
    console.log(choice);
    if (choice === 'black') {
        color = 'black';
    } else if (choice === 'random') {
        color = getRandomColor();
    } else {
        //hsl color
        if (colorArray.length == 0) {
            colorArray = getHSLRandomColor();
        }
        color = colorArray[0];
        colorArray.shift();        
    }
    return color;
}

for (let i = 0; i < 16*16; i++) {
    cell = document.createElement('div');
    cell.setAttribute('id', 'cell');
    
    grid.appendChild(cell);
}


function changeGridSize() {
    let n;
    let choice = gridSize.value;
    switch (choice) {
        case '16':
            n = 16;
            break;
        case '32':
            n = 32;
            break;
        case '48':
            n = 48;
            break;
        case '64':
            n = 64;
            break;
        case 'custom':
            while (true) {
                n = prompt('What size grid do you want?');
                if (typeof Number(n) === 'number' && n > 0) {
                    break;
                }
            }
            
            
    }
    //n = prompt('What size grid do you want?');
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

    gridSize.value = '16';
    for (let i = 0; i < 16*16; i++) {
        cell = document.createElement('div');
        cell.setAttribute('id', 'cell');
        grid.appendChild(cell);
    }
    grid.style.cssText = 'grid-template-rows: repeat(16, 1fr); grid-template-columns: repeat(16, 1fr)';
    displayColors();
}

//grid.addEventListener('click', (e) => console.log(e));

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

/*function getBnWColor() {
    return 'black';
}*/

function getHSLRandomColor() {
    // hsl color is remaining
    let hslArray = [];
    let hue = Math.floor(Math.random() * 360);
    
    let lightness = 80;
    hslArray.push(`hsl(${hue}, 100%, 80%)`);
    for (let i = 0; i < 6; i++) {
        lightness -= 10;
        hslArray.push(`hsl(${hue}, 100%, ${lightness}%)`);
    }
    return hslArray;
}

displayColors();