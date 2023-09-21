import React from "react";
import { buildBoard } from "../business/Board";
import { transferToBoard } from "../business/Tetrominoes";
import BoardCell from "./BoardCell";

const Preview = ({ tetromino, index }) => {
  const { shape, className } = tetromino;

  const board = buildBoard({ rows: 4, columns: 4 });

  const style = { top: `${index * 15}vw` };

  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, col: 0 },
    rows: board.rows,
    shape,
  });

  return (
    <div
      className="absolute left-[72.2vw] top-0 rounded-[10px] border-[10px_solid_rgba(0,0,0,0)] bg-[rgba(0,0,0,0.1)]"
      style={style}
    >
      <div className="grid h-[11vw] w-[11vw] grid-cols-[repeat(4,1fr)] grid-rows-[repeat(4,1fr)] gap-0.5">
        {board.rows.map((row, y) =>
          row.map((cell, x) => (
            <BoardCell key={x * board.size.columns + x} cell={cell} />
          ))
        )}
      </div>
    </div>
  );
};

export default React.memo(Preview);
