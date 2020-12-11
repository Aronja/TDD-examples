const { platform } = require("os");

class TicTacToe {
    constructor() {
        this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.winningCond = [[1, 2, 3,], [4 , 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
        this.triesX = [];
        this.triesY = [];
        this.winner = "";
        this.currentPlayer = "";
    }

    turn = (player, field) => {
        this.updateGame(player, field);
        this.updateTriesPlayer(field);
        this.checkWinner()
    }

    updateTriesPlayer = (field) => {
        let playerTries = this.getPlayerTries(this.player);
        playerTries.push(field);
    }

    getPlayerTries = (player) => {
        if (player === "X") return this.triesX;
        else if (player === "Y") return this.triesY;
        else throw new Error("invalid player");
    }

    updateGame = (player, field) => {
        this.checkTurn(player);
        this.updateBoard(field);
    }

    checkTurn = (player) => {
        if (this.player === player) throw new Error("hey, it's the other player's turn");
        else this.player = player;
    }

    updateBoard = (field) => {
        let index = this.board.indexOf(field);
        if (index != -1)  this.board.splice(index, 1)  
        else throw new Error("invalid field");
    }

    checkWinner = () => {
        let tries = this.getPlayerTries(this.player)
        this.winningCond.forEach(arr => {
            let matches = [];
            for (let i = 0; i < tries.length; i++) {
                if (arr.indexOf(tries[i]) != -1) {
                    matches.push(tries[i]);
                }
                if (matches.length === 3) {
                    this.winner = this.player; 
                    return;
                }
            }
        })
    }
}

module.exports = {
    TicTacToe
};