import type { ReactNode } from "react";
import { Links, Meta, Scripts } from "react-router";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className="bg-gray-900">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>techiebabel.com</title>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
};

export default Layout;
