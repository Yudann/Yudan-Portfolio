import React from "react";

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url("/background.avif")` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 text-white text-center">{children}</div>
    </div>
  );
};

export default Background;
