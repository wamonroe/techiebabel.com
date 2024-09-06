import { PropsWithChildren } from "react";

const Header = ({ children }: PropsWithChildren) => {
  return <div className="px-4 py-5 sm:px-6">{children}</div>;
};

export default Header;
