const Menu = ({ onClick }) => {
  return (
    <div className="z-[100] flex min-h-[50vh] items-center justify-center">
      <button
        className="cursor-pointer rounded-[20px] border-none px-20 py-10 text-[2em] neon-purple"
        onClick={onClick}
      >
        Play Tetris
      </button>
    </div>
  );
};
export default Menu;
