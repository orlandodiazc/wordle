import { FormEvent, useState } from "react";

interface FormElements extends HTMLFormControlsCollection {
  guessInput: HTMLInputElement;
}
interface GuessFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function GuessInput({
  addWordToGrid,
  disable,
}: {
  addWordToGrid: (word: string) => void;
  disable: boolean;
}) {
  const [word, setWord] = useState("");
  function handleSubmit(event: FormEvent<GuessFormElement>) {
    event.preventDefault();
    addWordToGrid(word);
    setWord("");
  }
  return (
    <form onSubmit={handleSubmit} className="flex h-28 flex-col gap-2">
      <label htmlFor="guessInput" className="text-xl font-semibold">
        Enter guess:
      </label>
      <input
        value={word}
        disabled={disable}
        className="block w-full rounded border-2 border-gray-400 px-4 py-2 text-3xl outline-offset-4 outline-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        id="guessInput"
        type="text"
        pattern="^[A-Za-z]{5}$"
        onChange={(event) => setWord(event.target.value)}
      />
    </form>
  );
}
