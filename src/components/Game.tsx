import { WORDS } from "@lib/data";
import { sample } from "@lib/utils";
import GuessInput from "./GuessInput";
import { useState } from "react";
import { Guess } from "./Guess";
import { NUM_OF_GUESSES_ALLOWED } from "@lib/constants";
import { checkGuess } from "@lib/game-helpers";
import clsx from "clsx";

export type Cell = {
  letter: string;
  status: null | "correct" | "misplaced" | "incorrect";
};
type WordGrid = Cell[][];
type GameStatus = "playing" | "won" | "lost";

const answer = sample(WORDS);
console.log(answer);

const wordsInitialState: WordGrid = Array(NUM_OF_GUESSES_ALLOWED).fill(
  Array(5).fill({ letter: "", status: null }),
);

export function Game() {
  const [words, setWords] = useState<WordGrid>(wordsInitialState);
  const [guessCounter, setCounter] = useState(0);
  const [gameStatus, setStatus] = useState<GameStatus>("playing");

  function handleNewWord(guess: string) {
    if (gameStatus !== "playing") return;
    const guessResult: Cell[] =
      checkGuess(guess, answer) ?? Array(5).fill({ letter: "", status: null });

    setWords((prev) =>
      prev.map((wordArray, index) => {
        if (guessCounter === index) {
          return guessResult;
        }
        return wordArray;
      }),
    );

    const isWinner = guessResult.every((cell) => cell.status === "correct");
    const updatedGuessCounter = guessCounter + 1;

    if (isWinner) {
      setStatus("won");
    } else if (updatedGuessCounter >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
    setCounter(updatedGuessCounter);
  }

  return (
    <div className="px-2 py-2 md:py-6">
      <div className="m-auto flex min-w-[250px] max-w-sm flex-grow flex-col gap-2 px-8 sm:gap-4">
        <div className="flex flex-col justify-center gap-1">
          {words.map((wordArray, index) => (
            <Guess wordArray={wordArray} key={index} />
          ))}
        </div>
        <GuessInput
          addWordToGrid={handleNewWord}
          disable={gameStatus !== "playing"}
        />
      </div>
      {gameStatus !== "playing" && (
        <div
          className={clsx(
            "m-auto grid h-20 max-w-lg place-content-center rounded  text-center",
            gameStatus == "won" ? "bg-green-700" : "bg-red-700",
          )}
        >
          {gameStatus === "won" ? (
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>
                {guessCounter} {guessCounter === 1 ? "guess" : "guesses"}
              </strong>
              .
            </p>
          ) : (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
