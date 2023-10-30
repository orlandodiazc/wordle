import Game from "@components/Game";
import Header from "@components/Header";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="m-auto flex min-w-[250px] max-w-[min(500px,_58vh,_100%)] flex-grow flex-col  gap-2 px-8 py-2 sm:gap-8 md:py-8">
        <Game />
      </div>
    </div>
  );
}

export default App;
