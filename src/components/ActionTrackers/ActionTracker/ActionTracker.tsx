import { ActionTrackerType } from "../../../lib/nimbleLocalStorage";

import Button from "../../Button";
import Card from "../../Card";
import XButton from "../../XButton";
import ActionIcon from "./ActionIcon";

export type SetActionTrackerCallback = (tracker: ActionTrackerType) => ActionTrackerType;

type ActionTrackerProps = {
  tracker: ActionTrackerType;
  setTracker: (callback: SetActionTrackerCallback) => void;
  onRemove: () => void;
};

const ActionTracker = ({ tracker, setTracker, onRemove }: ActionTrackerProps) => {
  const handleToggle = (action: 1 | 2 | 3) => {
    return () => {
      setTracker((tracker) => {
        tracker.actions[action] = !tracker.actions[action];
        return tracker;
      });
    };
  };

  const handleReset = () => {
    setTracker((tracker) => {
      tracker.actions = { 1: true, 2: true, 3: true };
      return tracker;
    });
  };

  const handleClear = () => {
    setTracker((tracker) => {
      tracker.actions = { 1: false, 2: false, 3: false };
      return tracker;
    });
  };

  return (
    <Card>
      <Card.Header>
        <div className="flex justify-between">
          <div>{tracker.name}</div>
          <div className="flex items-center">
            <XButton screenReaderText="Remove" onClick={onRemove} />
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <div className="flex justify-between">
          <div className="flex flex-1 justify-center space-x-3">
            <ActionIcon sides={1} available={tracker.actions[1]} onClick={handleToggle(1)} />
            <ActionIcon sides={2} available={tracker.actions[2]} onClick={handleToggle(2)} />
            <ActionIcon sides={3} available={tracker.actions[3]} onClick={handleToggle(3)} />
          </div>
          <div className="flex flex-col justify-center space-y-1.5">
            <Button color="primary" size="xs" onClick={handleReset}>
              Reset
            </Button>
            <Button color="soft" size="xs" onClick={handleClear}>
              Clear
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ActionTracker;
