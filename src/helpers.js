export function calculateWinner(cells) {
    const lines = [
        [0, 1, 2], // Horizontal
        [3, 4, 5], // Horizontal
        [6, 7, 8], // Horizontal
        [0, 3, 6], // Vertical
        [1, 4, 7], // Vertical
        [2, 5, 8], // Vertical
        [0, 4, 8], // Diagonal
        [2, 4, 6], // Diagonal
    ];
    for (let index = 0; index < lines.length; index++) {
        const [a, b, c] = lines[index];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
        }
    }
    return null;
}

