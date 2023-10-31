import { WORDS } from "@lib/data";
import { range, sample } from "@lib/utils";
import GuessInput from "./GuessInput";
import { useState } from "react";
import { Guess } from "./Guess";
import { NUM_OF_GUESSES_ALLOWED } from "@lib/constants";

type WordGrid = string[][];

const answer = sample(WORDS);
console.info({ answer });
const wordsInitialState = range(0, NUM_OF_GUESSES_ALLOWED).map(() =>
  range(0, 5).map(() => ""),
);

function Game() {
  const [words, setWords] = useState<WordGrid>(wordsInitialState);
  const [wordCounter, setCounter] = useState(0);
  function handleNewWord(word: string) {
    if (wordCounter < 6) {
      setWords((prev) =>
        prev.map((wordArray, index) => {
          if (index === wordCounter) {
            return word.split("");
          }
          return wordArray;
        }),
      );
      setCounter((prev) => prev + 1);
    }
  }
  return (
    <>
      <div className="flex flex-col justify-center gap-1">
        {words.map((wordArray, index) => (
          <Guess wordArray={wordArray} key={index} />
        ))}
      </div>
      <GuessInput addWordToGrid={handleNewWord} />
    </>
  );
}

export default Game;
