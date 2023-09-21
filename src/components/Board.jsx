import BoardCell from "./BoardCell";

const Board = ({ board }) => {
  const boardStyles = {
    gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`,
  };

  return (
    <div
      className="mx-auto my-[2em] grid h-[500px] w-[250px] gap-[2px] rounded-[10px] border-[10px_solid_rgb(32,0,64)] bg-[rgb(32,0,64)] shadow-[rgba(0,0,0,0.35)0px_5px_15px] lg:h-[90vh] lg:w-[25vw]"
      style={boardStyles}
    >
      {board.rows.map((row, y) =>
        row.map((cell, x) => (
          <BoardCell key={x * board.size.columns + x} cell={cell} />
        ))
      )}
    </div>
  );
};

export default Board;
