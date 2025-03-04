import React from "react";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={` flex text-[24px] md:text-4xl font-bold flex-col justify-center p-5 bg-black-background border-[2px] border-black-border rounded-[24px] text-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
