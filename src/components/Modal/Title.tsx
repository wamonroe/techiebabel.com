import { PropsWithChildren } from "react";
import { DialogTitle } from "@headlessui/react";

const Title = ({ children }: PropsWithChildren) => {
  return (
    <DialogTitle
      as="h3"
      className="text-base font-semibold leading-6 text-gray-900"
    >
      {children}
    </DialogTitle>
  );
};

export default Title;
