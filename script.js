const Gameboard = (function (){
    const board = [];
    let counter = 0;

    const createBoard = function() {
        const rows = 3;
        const cols = 3;

        for (i = 0; i < rows; i++) {
            board[i] = [];
            for(j = 0; j < cols; j++){
                board[i].push(counter);
                counter++;
            }
        }
    }

    const showGameBoard = function() {
        console.log(board);
    }

    return {
        board,
        showGameBoard,
        createBoard,
    };
    
})();

const createPlayer = (name, marker) => {
    let playerName = name;
    let playerMarker = marker;
    let spots = [];

    const addSpots = (selection) => {
        spots.push(selection);
    }

    const showSpots = () => {
        console.log(spots);
    }

    return {
        playerName, 
        playerMarker,
        showSpots,
        addSpots,
    }
}

const GameController = (function (){
    let players = [];
    let currentPlayer;
    let gameOver = false;

    const start = () => {
        Gameboard.createBoard();
        currentPlayer = 0;
        gameOver = false;
        players = [
            createPlayer('playerOne', 'x'),
            createPlayer('playerTwo', 'o')
        ];
        console.log(players, Gameboard.board);
    }

    const playerMove = ([row], [selection]) => {

        if(typeof Gameboard.board[row][selection] !== "number") {
            console.log("invalid move, go again");
            return
        }
        let getNumber = Gameboard.board[row][selection];
        console.log(getNumber);
        players[currentPlayer].addSpots(getNumber);
        players[currentPlayer].showSpots();

        Gameboard.board[row][selection] = players[currentPlayer].playerMarker;
        
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        
        
        Gameboard.showGameBoard();
    }


    return {
        start,
        playerMove,
    }
})();







