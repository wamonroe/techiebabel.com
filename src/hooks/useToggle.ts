import { useState } from "react";

export interface UseOpenStateReturn {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleToggle: () => void;
}

const useToggle = (): UseOpenStateReturn => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleToggle = () => setOpen((value) => !value);

  return {
    open,
    handleOpen,
    handleClose,
    handleToggle
  };
};

export default useToggle;
