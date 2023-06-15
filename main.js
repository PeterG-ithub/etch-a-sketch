const gridContainer = document.querySelector('.grid-container')

function createGrid() {
    console.log("Hello there!")
    for (let i = 0; i < 25; i++)
    {
        const div = document.createElement('div');
        gridContainer.appendChild(div);
        console.log("Hello ");
    }
    
}

createGrid();