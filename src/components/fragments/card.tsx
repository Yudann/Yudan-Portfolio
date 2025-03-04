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
      className={` flex flex-col justify-center p-5 bg-black-background border-[2px] border-black-border rounded-[24px] text-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
