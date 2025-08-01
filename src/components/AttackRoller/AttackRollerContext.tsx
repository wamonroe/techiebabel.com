import { createContext } from "react";
import { AttackRollResult } from "../../lib/dice";

type AttackRollerContextType = {
  modalOpen: boolean;
  openModal: (dice: string) => () => void;
  closeModal: (open?: boolean) => void;
  dice: string | undefined;
  handleRoll: () => void;
  adv: number;
  incrementAdv: () => void;
  decrementAdv: () => void;
  dis: number;
  incrementDis: () => void;
  decrementDis: () => void;
  result: AttackRollResult | undefined;
  clearResult: () => void;
};

const AttackRollerContext = createContext<AttackRollerContextType>({
  modalOpen: false,
  openModal: (_dice) => () => {},
  closeModal: (_open) => {},
  dice: undefined,
  handleRoll: () => {},
  adv: 0,
  incrementAdv: () => {},
  decrementAdv: () => {},
  dis: 0,
  incrementDis: () => {},
  decrementDis: () => {},
  result: undefined,
  clearResult: () => {}
});

export default AttackRollerContext;
