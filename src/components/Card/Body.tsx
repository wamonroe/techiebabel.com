import type { PropsWithChildren } from "react";

const Body = ({ children }: PropsWithChildren) => {
  return <div className="px-4 py-5 sm:p-6">{children}</div>;
};

export default Body;
