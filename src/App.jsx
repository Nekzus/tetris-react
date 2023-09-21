import Game from "./components/Game";

const App = () => {
  return (
    <div className="p-20 h-full text-center bg-violet-400 text-white">
      <Game
        rows={20}
        columns={10}
      />
    </div>
  );
};

export default App;
