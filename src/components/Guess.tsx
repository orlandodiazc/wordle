import clsx from "clsx";
import { type Cell } from "./Game";

export function Guess({ wordArray }: { wordArray: Cell[] }) {
  return (
    <div className="flex gap-1">
      {wordArray.map((cell, cellIndex) => (
        <span
          key={cellIndex}
          className={clsx(
            "relative grid aspect-square w-1/5 place-content-center border-2 border-gray-700 text-3xl font-medium",
            {
              "text-white": cell.status,
              "border-green-700 bg-green-700": cell.status === "correct",
              "border-yellow-500 bg-yellow-500": cell.status === "misplaced",
              "border-neutral-500 bg-neutral-500": cell.status === "incorrect",
            },
          )}
        >
          {cell.letter}
        </span>
      ))}
    </div>
  );
}
