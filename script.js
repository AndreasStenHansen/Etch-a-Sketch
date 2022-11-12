// Main functions
function updateGrid(number) {
    clearGrid();
    updateGridContainerTemplateColumns(number);
    let numberofDivs = number**2;
    //console.log(numberofDivs);
    createMultipleGridDivs(numberofDivs);
}

//Single functions
function createSingleGridDiv(){
    const container = document.querySelector('#grid');
    //console.log(container)
    const div = document.createElement('div');
    //console.log(div);
    div.classList.add('grid-item');
    container.appendChild(div);    
}

function createMultipleGridDivs(numberofDivs) {
    for (let i = 0; i < numberofDivs; i++) {
        createSingleGridDiv();
    }
}

function updateGridContainerTemplateColumns(columns) {
    const gridContainer = document.querySelector('.grid-container')
    //console.log(gridContainer)
    let numberOfColumns = '';
    //console.log(numberOfColumns);
    for (let i = 0; i < columns; i++) {
        numberOfColumns += 'auto '
        //console.log(numberOfColumns);
    }
    //console.log(numberOfColumns);
    gridContainer.style.gridTemplateColumns = numberOfColumns;
}

function clearGrid() {
    const gridNode = document.getElementById('grid');
    gridNode.innerHTML ='';
}