import { WORDS } from "@lib/data";
import { sample } from "@lib/utils";
import GuessInput from "./GuessInput";
import { useState } from "react";
import GuessList from "./GuessList";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [words, setWords] = useState<string[]>([]);
  return (
    <>
      <GuessList data={words} />
      <GuessInput
        addWordToList={(newWord) => setWords((prev) => [...prev, newWord])}
      />
    </>
  );
}

export default Game;
