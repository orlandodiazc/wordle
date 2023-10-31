export function Guess({ wordArray }: { wordArray: string[] }) {
  return (
    <div className="flex gap-1">
      {wordArray.map((letter, letterIndex) => (
        <span
          key={letterIndex}
          className="relative grid aspect-square w-1/5 place-content-center border-2 border-gray-700 text-3xl"
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
