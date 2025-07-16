"use client";
import TicTacToeBoard from "../components/TicTacToeBoard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <TicTacToeBoard />
    </main>
  );
}