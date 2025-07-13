"use client";

import React, { useState } from 'react';

const TicTacToeBoard: React.FC = () => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

const renderSquare = (index: number) => (
  <button
    key={index} // ✅ Add this line
    className="w-16 h-16 border-2 border-gray-500 text-2xl font-bold"
    onClick={() => handleClick(index)}
  >
    {board[index]}
  </button>
);


  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-1">
        {board.map((_, index) => renderSquare(index))}
      </div>
      <div className="mt-4">
        {winner ? (
          <h2 className="text-xl font-bold">{`Winner: ${winner}`}</h2>
        ) : (
          <h2 className="text-xl font-bold">{`Next Player: ${isXNext ? 'X' : 'O'}`}</h2>
        )}
      </div>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

/**
 * Determines the winner of the Tic-Tac-Toe game based on the current board state.
 * @param squares - An array representing the board, where each element is 'X', 'O', or null.
 * @returns The winner ('X' or 'O') if there is one, otherwise null.
 */
const calculateWinner = (squares: Array<string | null>): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToeBoard;