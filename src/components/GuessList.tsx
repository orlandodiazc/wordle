function GuessList({ data }: { data: string[] }) {
  return (
    <div>
      {data.map((guess, index) => (
        <p key={index}>{guess}</p>
      ))}
    </div>
  );
}

export default GuessList;
