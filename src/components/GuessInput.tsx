import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { GameStatus } from "./Game";

interface FormElements extends HTMLFormControlsCollection {
  guessInput: HTMLInputElement;
}
interface GuessFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function GuessInput({
  addWordToGrid,
  gameStatus,
}: {
  addWordToGrid: (word: string) => void;
  gameStatus: GameStatus;
}) {
  const [word, setWord] = useState("");

  function handleSubmit(event: FormEvent<GuessFormElement>) {
    event.preventDefault();
    addWordToGrid(word.toUpperCase());
    setWord("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex h-28 flex-col gap-2">
      <label htmlFor="guessInput" className="text-xl font-semibold">
        Enter guess:
      </label>
      <div className="flex items-center gap-2">
        <input
          value={word}
          disabled={gameStatus !== "playing"}
          className="block h-12 w-full rounded border-2 border-gray-400 px-4 py-2 text-3xl outline-offset-4 outline-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          id="guessInput"
          type="text"
          pattern="^[A-Za-z]{5}$"
          onChange={(event) => setWord(event.target.value)}
        />
        <button
          disabled={gameStatus !== "playing"}
          className="flex h-12 w-14 items-center justify-center whitespace-nowrap rounded-md bg-blue-900 font-semibold text-white hover:bg-blue-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          <ArrowRight />
        </button>
      </div>
    </form>
  );
}
