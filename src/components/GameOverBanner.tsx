import clsx from "clsx";
import { type GameStatus } from "./Game";
import { ReactNode } from "react";

export function GameOverBanner({
  gameStatus,
  children,
}: {
  gameStatus: GameStatus;
  children: ReactNode;
}) {
  return (
    <section
      className={clsx(
        "mb-4 rounded-md px-8 py-6",
        gameStatus == "won" ? "bg-green-700" : "bg-red-700",
      )}
    >
      {children}
    </section>
  );
}

export function WonDescription({ guessCount }: { guessCount: number }) {
  return (
    <>
      <h2 className="mb-2 text-center text-3xl font-bold text-gray-100">
        You Won
      </h2>
      <p className="text-center">
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessCount} {guessCount === 1 ? "guess" : "guesses"}
        </strong>
        .
      </p>
    </>
  );
}

export function LostDescription({ answer }: { answer: string }) {
  return (
    <>
      <h2 className="mb-2 text-center text-3xl font-bold text-gray-100">
        You Lost
      </h2>
      <p className="text-center">
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </>
  );
}
