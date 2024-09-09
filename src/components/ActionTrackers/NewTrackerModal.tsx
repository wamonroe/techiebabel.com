import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import Button from "../Button";
import Modal from "../Modal";

type NewTrackerModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: (name: string) => void;
};

const NewTrackerModal = ({
  open,
  onClose,
  onConfirm,
}: NewTrackerModalProps) => {
  const [name, setName] = useState("New Action Tracker");
  const [hasError, setHasError] = useState(false);
  const nameInput = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTracker();
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    if (newName !== "") {
      setHasError(false);
    } else {
      setHasError(true);
    }
    setName(event.target.value);
  };

  const handleAddTracker = () => {
    if (name === "") {
      setHasError(true);
    } else {
      setHasError(false);
      onConfirm(name);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        nameInput.current?.focus();
      }, 100);
    } else {
      setTimeout(() => {
        setName("New Action Tracker");
        setHasError(false);
      }, 200);
    }
  }, [open]);

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Content>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            id="name"
            name="name"
            ref={nameInput}
            type="text"
            placeholder="Character's Name"
            aria-invalid="true"
            aria-describedby="name-error"
            value={name}
            onChange={handleNameChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            className={twMerge(
              "block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
              hasError
                ? "pr-10 text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500"
                : "text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-blue-600"
            )}
            autoFocus
            data-1p-ignore
          />
          {hasError && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon
                aria-hidden="true"
                className="h-5 w-5 text-red-500"
              />
            </div>
          )}
        </div>
        {hasError && (
          <p id="name-error" className="mt-2 text-sm text-red-600">
            Cannot be blank.
          </p>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleAddTracker} className="w-full">
          Add Action Tracker
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default NewTrackerModal;
