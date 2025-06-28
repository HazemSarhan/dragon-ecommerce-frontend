import React from 'react';

const MagicButton = ({
  title,
  icon,
  position = 'left',
  handleClick,
  otherClasses = '',
}) => {
  return (
    <button
      onClick={handleClick}
      className="relative overflow-hidden rounded-lg p-[1px] focus:outline-none w-full group"
    >
      {/* Animated Border */}
      <div
        className="absolute inset-[-1000%] z-0 animate-[spin_3s_linear_infinite] 
        bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />

      {/* Actual Button */}
      <span
        className={`relative z-10 inline-flex w-full items-center justify-center gap-2 
          rounded-lg bg-white dark:bg-slate-950 text-black dark:text-white 
          px-4 py-2 text-base font-medium backdrop-blur-md transition
          hover:text-[#393BB2] text-nowrap dark:hover:text-[#E2CBFF] ${otherClasses}`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
