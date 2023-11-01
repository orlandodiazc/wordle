import { WORDS } from "@lib/data";
import { range, sample } from "@lib/utils";
import GuessInput from "./GuessInput";
import { useState } from "react";
import { Guess } from "./Guess";
import { NUM_OF_GUESSES_ALLOWED } from "@lib/constants";
import { checkGuess } from "@lib/game-helpers";
import { GameOverModal } from "./GameOverModal";
import {
  GameOverBanner,
  LostDescription,
  WonDescription,
} from "./GameOverBanner";

export type Cell = {
  letter: string | null;
  status: null | "correct" | "misplaced" | "incorrect";
};
export type WordGrid = Cell[][];
export type GameStatus = "playing" | "won" | "lost";

export function Game() {
  const [guesses, setGuesses] = useState<WordGrid>([]);
  const [answer, setAnswer] = useState(sample(WORDS));
  const [gameStatus, setStatus] = useState<GameStatus>("playing");

  function handleNewGuess(guess: string) {
    const guessResult = checkGuess(guess, answer) ?? [];
    setGuesses([...guesses, guessResult]);

    const isWinner = guessResult.every((cell) => cell.status === "correct");
    if (isWinner) {
      setStatus("won");
    } else if (guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  }

  function handleReset() {
    setGuesses([]);
    setAnswer(sample(WORDS));
    setStatus("playing");
  }

  return (
    <div className="px-2 py-2 md:py-6">
      <div className="m-auto flex min-w-[250px] max-w-sm flex-grow flex-col gap-2 px-8 sm:gap-4">
        <div className="flex flex-col justify-center gap-1">
          {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
            <Guess key={index} guess={guesses[index]} />
          ))}
        </div>
        <GuessInput addWordToGrid={handleNewGuess} gameStatus={gameStatus} />
      </div>
      <GameOverModal open={gameStatus !== "playing"} closeHandler={handleReset}>
        <GameOverBanner gameStatus={gameStatus}>
          {gameStatus === "won" && (
            <WonDescription guessCount={guesses.length} />
          )}
          {gameStatus === "lost" && <LostDescription answer={answer} />}
        </GameOverBanner>
      </GameOverModal>
    </div>
  );
}
