import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex text-[24px] md:text-4xl font-bold flex-col items-center justify-center p-5 bg-black-background border-[2px] border-black-border rounded-[24px] text-white text-center">
      {children}
    </div>
  );
};

export default Card;
