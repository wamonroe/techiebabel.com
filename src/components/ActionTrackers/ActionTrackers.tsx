import { useState } from "react";
import useToggle from "../../hooks/useToggle";
import nimbleLocalStorage, {
  ActionTrackerType,
  cloneActionTracker,
  combineActionTrackers
} from "../../lib/nimbleLocalStorage";

import Button from "../Button";
import ActionTracker, { SetActionTrackerCallback } from "./ActionTracker";
import NewTrackerModal from "./NewTrackerModal";

const ActionTrackers = () => {
  const storage = nimbleLocalStorage.get();
  const [actionTrackers, setActionTrackers] = useState<ActionTrackerType[]>(storage.actionTrackers);
  const {
    open: newModalOpen,
    handleOpen: handleModalOpen,
    handleClose: handleModalClose
  } = useToggle();

  const setActionTracker = (id: string) => {
    return (callback: SetActionTrackerCallback) => {
      setActionTrackers((actionTrackers) => {
        const actionTracker = actionTrackers.find((t) => t.id === id);
        if (actionTracker) {
          const newActionTracker = callback(cloneActionTracker(actionTracker));
          nimbleLocalStorage.setActionTracker(newActionTracker);
          return combineActionTrackers([...actionTrackers], newActionTracker);
        } else {
          return actionTrackers;
        }
      });
    };
  };

  const delActionTracker = (id: string) => {
    return () => {
      setActionTrackers((actionTrackers) => {
        const newActionTrackers = actionTrackers.filter((t) => t.id !== id);
        nimbleLocalStorage.delActionTracker(id);
        return newActionTrackers;
      });
    };
  };

  const addTracker = (name: string) => {
    const actionTracker = nimbleLocalStorage.createActionTracker(name);
    setActionTrackers((actionTrackers) => {
      nimbleLocalStorage.setActionTracker(actionTracker);
      return [...actionTrackers, actionTracker];
    });
  };

  const handleAdd = (name: string) => {
    handleModalClose();
    addTracker(name);
  };

  const handleSetAll = (value: boolean) => {
    return () => {
      setActionTrackers((actionTrackers) => {
        const newActionTrackers = [] as ActionTrackerType[];
        actionTrackers.forEach((tracker) => {
          const newTracker = cloneActionTracker(tracker);
          newTracker.actions = { 1: value, 2: value, 3: value };
          newActionTrackers.push(newTracker);
          nimbleLocalStorage.setActionTracker(newTracker);
        });
        return newActionTrackers;
      });
    };
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between">
        <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Action Trackers
        </h2>
        <div className="mt-3 flex space-x-3 md:mt-0">
          <Button color="soft" className="w-full md:w-auto" onClick={handleSetAll(false)}>
            Clear all actions
          </Button>
          <Button color="soft" className="w-full md:w-auto" onClick={handleSetAll(true)}>
            Reset all actions
          </Button>
          <Button className="w-full md:w-auto" onClick={handleModalOpen}>
            Add tracker
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {actionTrackers.map((tracker) => (
          <ActionTracker
            key={tracker.id}
            tracker={tracker}
            setTracker={setActionTracker(tracker.id)}
            onRemove={delActionTracker(tracker.id)}
          />
        ))}
      </div>
      <NewTrackerModal open={newModalOpen} onClose={handleModalClose} onConfirm={handleAdd} />
    </>
  );
};

export default ActionTrackers;
