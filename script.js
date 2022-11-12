function createSingleGridDiv(){
    const container = document.querySelector('#grid');
    console.log(container)
    const div = document.createElement('div');
    console.log(div);
    div.classList.add('grid-item');
    container.appendChild(div);    
}

function createMultipleGridDivs(number) {
    for (let i = 0; i < number; i++) {
        createSingleGridDiv();
    }
}