import Game from "./components/Game";

const App = () => {
  return (
    <div className="h-screen bg-violet-950 p-5 text-center font-sans text-white">
      <Game rows={20} columns={10} />
    </div>
  );
};

export default App;
