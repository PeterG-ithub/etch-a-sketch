const gridContainer = document.querySelector('.grid-container')
const sizeBtn = document.querySelector('.size-btn');
const eraseBtn = document.querySelector('.erase-btn');

function createGrid(width) {
    let divSize = 900/width;
    let numOfRows = Math.round(width/1.8);
    console.log(numOfRows);
    for (let i = 0; i < width*numOfRows; i++)
    {
        const div = document.createElement('div');
        div.style.width = `${divSize}px`;
        div.style.height = divSize + "px";
        div.addEventListener('mouseover', () => {
            div.classList.add('test');
        });
        gridContainer.appendChild(div);
    }
    gridContainer.style.height = divSize*numOfRows + "px";
}

createGrid(81);