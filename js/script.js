// Recupero gli elementi in pagina

const grid = document.getElementById('grid');
const button = document.getElementById('button')

// Funzioni

// Funzione creazione cella

const createCell = (content) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = content;
    return cell;
}


// Rows and Cols

const rows = 10;
const cols = 10;
const totalCells = rows * cols;


// Svolgimento delle funzioni dentro il click del bottone

button.addEventListener('click', function () {

    // Rimuovo il figlio di grid così che il loop riparta da capo
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    // Creo un ciclo for perchè mi servirà la i

    for (let i = 1; i <= totalCells; i++) {


        // creo la cella e gli assegno il numero
        const cell = createCell(i);

        // Aggiungo le funzioni al click

        cell.addEventListener('click', () => {
            cell.classList.toggle('clicked');
            // Quando clicco su una cella metto il numero in console
            console.log('Cella cliccata numero:', i)
        })

        // Appendo la classe in pagina

        grid.appendChild(cell);
    }
})