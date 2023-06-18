const gridContainer = document.querySelector('.grid-container')

function createGrid(size) {
    let divSize = 500/size;
    console.log(divSize)
    for (let i = 0; i < size*size; i++)
    {
        const div = document.createElement('div');
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
        div.addEventListener('mouseover', () => {
            div.classList.add('test');
        });
        gridContainer.appendChild(div);
        console.log("Hello ");
    }
    
}

createGrid(25);