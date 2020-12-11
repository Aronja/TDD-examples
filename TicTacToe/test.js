const { expect, it } = require("@jest/globals");
const {
  TicTacToe 
} = require("./tictactoe");
let ticTacToe;

describe('TicTacToe', () => {
    ticTacToe = new TicTacToe();

    it('is set up with initial state', () => {
        expect(ticTacToe.board).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(ticTacToe.triesX).toEqual([]);
        expect(ticTacToe.triesY).toEqual([]);
        expect(ticTacToe.currentPlayer).toEqual("");
    }),

    it('allows X to make a move', () => {
        ticTacToe = new TicTacToe();
        ticTacToe.turn("X", 1); 
        expect(ticTacToe.board).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
        expect(ticTacToe.triesX).toEqual([1]);
    }),
    
    it('allows Y to make a move', () => {
        ticTacToe = new TicTacToe();
        ticTacToe.turn("Y", 2); 
        expect(ticTacToe.board).toEqual([1, 3, 4, 5, 6, 7, 8, 9]);
        expect(ticTacToe.triesY).toEqual([2]);
    })

    it('throws an error when trying to play with invalid player', () => {
        expect(() => {
            ticTacToe.turn("A", 3);
          }).toThrow();
    }),

    it('allows player to make multiple moves', () => {
        ticTacToe = new TicTacToe();
        ticTacToe.turn("Y", 2); 
        ticTacToe.turn("X", 4); 
        ticTacToe.turn("Y", 5); 

        expect(ticTacToe.board).toEqual([1, 3, 6, 7, 8, 9]);
        expect(ticTacToe.triesX).toEqual([4]);
        expect(ticTacToe.triesY).toEqual([2, 5]);
    })
    it('does not allow a player to select a field that has been chosen', () => {
        ticTacToe = new TicTacToe();
        ticTacToe.turn("X", 2); 

        expect(ticTacToe.board).toEqual([1, 3, 4, 5, 6, 7, 8, 9]);
        expect(ticTacToe.triesX).toEqual([2]);

        expect(() => {
            ticTacToe.turn("Y", 2); 
        }).toThrow();

        expect(ticTacToe.triesY).toEqual([]);
    })

    it('evaluates if a player has won', () => {
        ticTacToe = new TicTacToe();
        ticTacToe.turn("X", 2); 
        ticTacToe.turn("Y", 3)
        ticTacToe.turn("X", 5); 
        ticTacToe.turn("Y", 4)
        ticTacToe.turn("X", 8); 
    
        expect(ticTacToe.triesX).toEqual([2, 5, 8]);
        expect(ticTacToe.winner).toEqual("X");
    })

    it('does not allow consecutive turns for one player', () => {
        ticTacToe = new TicTacToe();
        ticTacToe.turn("X", 2); 
        expect(() => {
            ticTacToe.turn("X", 3); 
        }).toThrow();        
    })
})