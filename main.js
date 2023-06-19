const gridContainer = document.querySelector('.grid-container')
const sizeBtn = document.querySelector('.size-btn');
const eraseBtn = document.querySelector('.erase-btn');

eraseBtn.addEventListener('click', () => resetBoard());
sizeBtn.addEventListener('click', () => promptSize());
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
            div.classList.add('hovered');
        });
        gridContainer.appendChild(div);
    }
    gridContainer.style.height = divSize*numOfRows + "px";
}

function resetBoard() {
    const hovered = document.querySelectorAll(".hovered");
    hovered.forEach((element) => {
        element.classList.remove('hovered');
    });
}

createGrid(81);