function ABC(){
    const container = document.querySelector('#grid');
    console.log(container)
    const div = document.createElement('div');
    console.log(div);
    div.classList.add('grid-item');
    container.appendChild(div);    
}
