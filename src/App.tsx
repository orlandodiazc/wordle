import { Game } from "@components/Game";
import { Header } from "@components/Header";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Game />
    </div>
  );
}

export default App;
