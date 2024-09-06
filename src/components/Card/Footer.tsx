import { PropsWithChildren } from "react";

const Footer = ({ children }: PropsWithChildren) => {
  return <div className="px-4 py-4 sm:px-6">{children}</div>;
};

export default Footer;
