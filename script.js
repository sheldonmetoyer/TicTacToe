const Gameboard = (function (){
    const board = [];

    const createBoard = function() {
        const rows = 3;
        const cols = 3;

        for (i = 0; i < rows; i++) {
            board.push([]);
            for(j = 0; j < cols; j++){
                board[i].push(`${i},${j}`);
            }
        }
    }

    const showGameBoard = function() {
        createBoard();
        console.log(board);
        return board;
    }

    return {showGameBoard};
    
})();

const createPlayer = (name, marker) => {
    let playerName = name;
    let playerMarker = marker;

    return {playerName, playerMarker}
}

const GameController = (function (){
    let players = [];
    let currentPlayerIndex;
    let gameOver = false;

    const start = () => {
        players = [
            createPlayer('playerOne', 'x'),
            createPlayer('playerTwo', 'O')
        ];
        currentPlayerIndex = 0;
        gameOver = false;
        console.log(players);
        Gameboard.showGameBoard();
    }

    return {start}
})();







