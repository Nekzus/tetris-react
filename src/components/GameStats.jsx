import React from "react";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className="absolute bottom-0 right-0 w-[22vw] list-none text-left text-[rgba(255,255,255,0.5)]">
      <li>Level</li>
      <li className="mb-[0.5em] text-[2.8rem] text-[rgba(255,255,225,1)]">
        {level}
      </li>
      <li>Lines to level</li>
      <li className="mb-[0.5em] text-[2.8rem] text-[rgba(255,255,225,1)]">
        {linesToLevel}
      </li>
      <li>Points</li>
      <li className="mb-[0.5em] text-[2.8rem] text-[rgba(255,255,225,1)]">
        {points}
      </li>
    </ul>
  );
};

export default React.memo(GameStats);
