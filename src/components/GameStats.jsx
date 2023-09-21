import React from "react";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className="absolute bottom-0 right-0 w-[95px] list-none text-left text-[rgba(255,255,255,0.5)] md:w-[290px] lg:w-[35vw]">
      <li>Level</li>
      <li className="mb-[0.1em] text-[1.2rem] text-[rgba(255,255,225,1)] md:mb-[0.1em] md:text-[1.2rem] lg:mb-[0.5em] lg:text-[2.8rem]">
        {level}
      </li>
      <li>Lines to level</li>
      <li className="mb-[0.1em] text-[1.2rem] text-[rgba(255,255,225,1)] lg:mb-[0.5em] lg:text-[2.8rem]">
        {linesToLevel}
      </li>
      <li>Points</li>
      <li className="mb-[0.1em] text-[1.2rem] text-[rgba(255,255,225,1)] lg:mb-[0.5em] lg:text-[2.8rem]">
        {points}
      </li>
    </ul>
  );
};

export default React.memo(GameStats);
