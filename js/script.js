// Recupero gli elementi in pagina

const grid = document.getElementById('grid');

// Funzioni

const createCell = () => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    return cell;
}


// Rows and Cols

const rows = 10;
const cols = 10;
const totalCells = rows * cols;




for (let i = 1; i < totalCells; i++) {

    const cell = createCell();

    grid.appendChild(cell);
}