import clsx from "clsx";
import { type GameStatus } from "./Game";

export function GameOverBanner({
  gameStatus,
  guessCounter,
  answer,
  handleReset,
}: {
  gameStatus: GameStatus;
  guessCounter: number;
  answer: string;
  handleReset: () => void;
}) {
  return (
    <>
      {gameStatus !== "playing" && (
        <div className="m-auto mb-2 flex max-w-lg flex-col justify-center">
          <div
            className={clsx(
              "mb-2 grid h-20 place-content-center rounded-md text-center",
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
          <div className="m-auto">
            <button
              disabled={false}
              className="h-12 rounded-md bg-blue-900 px-4 py-2 text-lg font-semibold text-white outline-offset-[3px] outline-gray-700 hover:bg-blue-900/90 disabled:pointer-events-none disabled:opacity-50"
              onClick={handleReset}
            >
              RESTART
            </button>
          </div>
        </div>
      )}
    </>
  );
}
