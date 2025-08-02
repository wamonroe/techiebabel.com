import type { PropsWithChildren } from "react";

const Actions = ({ children }: PropsWithChildren) => {
  return <div className="mt-5 sm:mt-6">{children}</div>;
};

export default Actions;
