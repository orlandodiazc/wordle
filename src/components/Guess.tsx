import clsx from "clsx";
import { type Cell } from "./Game";
import { range } from "@lib/utils";

function Cell({ letter, status }: Cell) {
  return (
    <span
      className={clsx(
        "relative grid aspect-square w-1/5 place-content-center border-2 border-gray-700 text-3xl font-medium group-first:first:rounded-tl-md group-first:last:rounded-tr-md group-last:first:rounded-bl-md group-last:last:rounded-br-md",
        {
          "text-white": status,
          "border-green-700 bg-green-700": status === "correct",
          "border-yellow-500 bg-yellow-500": status === "misplaced",
          "border-neutral-500 bg-neutral-500": status === "incorrect",
        },
      )}
    >
      {letter}
    </span>
  );
}

export function Guess({ guess }: { guess: Cell[] }) {
  return (
    <div className="group flex gap-1">
      {range(5).map((index) => (
        <Cell
          key={index}
          letter={guess ? guess[index].letter : null}
          status={guess ? guess[index].status : null}
        />
      ))}
    </div>
  );
}
