const gridContainer = document.getElementById('grid-container');
let size;

document.getElementById('button').addEventListener('click', ()=>{
    input = parseInt(prompt("Enter a grid size"));
    size = input
    createGrid(size);
});
function createGrid(size){
    gridContainer.innerHTML = '';
    if(size > 100){
        return prompt("Try again! Max grid size is 100 you can't go over that")
    }
    
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
createGrid(size);