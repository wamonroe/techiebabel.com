const LOCAL_STORAGE_KEY = "nimbleStorage";
const LOCAL_STORAGE_VERSION = 2;

type ActionTrackerType = {
  id: string;
  name: string;
  actions: {
    1: boolean;
    2: boolean;
    3: boolean;
  };
};

type NimbleLocalStorage = {
  actionTrackers: ActionTrackerType[];
  version: number;
};

const emptyLocalStorage = (): NimbleLocalStorage => ({
  actionTrackers: [],
  version: LOCAL_STORAGE_VERSION
});

const isBrowser = typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const getLocalStorage = () => {
  if (!isBrowser) return emptyLocalStorage();

  const storeStr = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!storeStr) return emptyLocalStorage();

  try {
    const json = JSON.parse(storeStr);
    if (json.version !== LOCAL_STORAGE_VERSION) {
      window.localStorage.removeItem(LOCAL_STORAGE_KEY);
      return emptyLocalStorage();
    }
    return json as NimbleLocalStorage;
  } catch {
    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
    return emptyLocalStorage();
  }
};

const getRandomId = (): string => {
  return crypto.randomUUID();
};

const setLocalStorage = (store: NimbleLocalStorage) => {
  if (!isBrowser) return;

  const storeStr = JSON.stringify(store);
  window.localStorage.setItem(LOCAL_STORAGE_KEY, storeStr);
};

const combineActionTrackers = (trackers: ActionTrackerType[], tracker: ActionTrackerType) => {
  const index = trackers.findIndex((t) => t.id === tracker.id);
  if (index >= 0) {
    trackers[index] = tracker;
    return trackers;
  } else {
    return [...trackers, tracker];
  }
};

const cloneActionTracker = (tracker: ActionTrackerType): ActionTrackerType => {
  return {
    ...tracker,
    actions: { ...tracker.actions }
  };
};

const createActionTracker = (name: string): ActionTrackerType => {
  const id = getRandomId();
  const actionTracker = {
    id,
    name,
    actions: {
      1: true,
      2: true,
      3: true
    }
  };
  setActionTracker(actionTracker);
  return actionTracker;
};

const getActionTracker = (id: string) => {
  const store = getLocalStorage();
  return store.actionTrackers.find((t) => t.id === id);
};

const setActionTracker = (actionTracker: ActionTrackerType) => {
  const store = getLocalStorage();
  const trackerIdx = store.actionTrackers.findIndex((t) => t.id === actionTracker.id);
  if (trackerIdx > -1) {
    store.actionTrackers[trackerIdx] = actionTracker;
  } else {
    store.actionTrackers.push(actionTracker);
  }
  setLocalStorage(store);
};

const delActionTracker = (id: string) => {
  const store = getLocalStorage();
  store.actionTrackers = store.actionTrackers.filter((t) => t.id !== id);
  setLocalStorage(store);
};

const nimbleLocalStorage = {
  get: getLocalStorage,
  createActionTracker,
  getActionTracker,
  setActionTracker,
  delActionTracker
};

export { cloneActionTracker, combineActionTrackers, getRandomId };
export type { ActionTrackerType, NimbleLocalStorage };
export default nimbleLocalStorage;
