"use client";
import TicTacToeBoard from "../components/TicTacToeBoard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Tic-Tac-Toe</h1>
      <TicTacToeBoard />
    </main>
  );
}