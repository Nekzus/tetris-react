const BoardCell = ({ cell }) => (
  <div className={`relative w-auto rounded-[6px] ${cell.className}`}>
    <div className="Sparkle"></div>
  </div>
);

export default BoardCell;
