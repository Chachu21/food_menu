import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className="max-w-[1336px] container mx-auto ">{children}</main>;
};

export default Wrapper;
