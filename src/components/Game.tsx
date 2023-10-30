import { WORDS } from "@lib/data";
import { sample } from "@lib/utils";
import GuessInput from "./GuessInput";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  return <GuessInput />;
}

export default Game;
