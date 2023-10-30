import { FormEvent, useState } from "react";

interface FormElements extends HTMLFormControlsCollection {
  guessInput: HTMLInputElement;
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function GuessInput() {
  const [word, setWord] = useState("");
  function handleSubmit(event: FormEvent<UsernameFormElement>) {
    event.preventDefault();
    console.log(word);
    setWord("");
  }
  return (
    <form onSubmit={handleSubmit} className="flex h-28 flex-col gap-2">
      <label htmlFor="guessInput" className="text-xl">
        Enter guess:
      </label>
      <input
        value={word}
        className="block w-full rounded border-2 border-gray-500 px-4 py-2 text-3xl outline-offset-4 outline-blue-700"
        id="guessInput"
        type="text"
        pattern="^[A-Za-z]{5}$"
        onChange={(event) => setWord(event.target.value)}
      />
    </form>
  );
}
