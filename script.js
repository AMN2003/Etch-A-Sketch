const gridContainer = document.getElementById('grid-container');
const gridSize = 16;

function createGrid(size){
    gridContainer.innerHTML = '';
    
    for (let i = 0; i < size * size; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener("mouseover", () => {
            gridSquare.style.backgroundColor = "blue";  
        });
        gridSquare.addEventListener("mouseleave", () => {
            gridSquare.style.backgroundColor = "white";
        });
        gridContainer.appendChild(gridSquare);

    }
}
createGrid(gridSize);