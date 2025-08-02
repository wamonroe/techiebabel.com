import { useEffect, useState } from "react";
import type { AttackRollResult } from "../../lib/dice";
import { attackRoll } from "../../lib/dice";

import Card from "../Card";
import AttackRollerContext from "./AttackRollerContext";
import DiceButton from "./DiceButton";
import RollModal from "./RollModal";

const AttackRoller = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [adv, setAdv] = useState(0);
  const [dis, setDis] = useState(0);
  const [dice, setDice] = useState<string>();
  const [result, setResult] = useState<AttackRollResult>();

  useEffect(() => {
    if (modalOpen) return;

    // delay clearing the result to allow for the animation
    setTimeout(() => {
      setAdv(0);
      setDis(0);
      setDice(undefined);
      setResult(undefined);
    }, 200);
  }, [modalOpen]);

  const closeModal = (_open?: boolean) => {
    setModalOpen(false);
  };

  const openModal = (dice: string) => {
    return () => {
      setDice(dice);
      setModalOpen(true);
    };
  };

  const handleRoll = () => {
    if (!dice) return;

    const result = attackRoll(dice, { adv, dis });
    setResult(result);
  };

  const clearResult = () => {
    setResult(undefined);
  };

  const incrementAdv = () => {
    setAdv((prev) => prev + 1);
  };

  const decrementAdv = () => {
    setAdv((prev) => prev - 1);
  };

  const incrementDis = () => {
    setDis((prev) => prev + 1);
  };

  const decrementDis = () => {
    setDis((prev) => prev - 1);
  };

  return (
    <AttackRollerContext.Provider
      value={{
        modalOpen,
        closeModal,
        dice,
        openModal,
        handleRoll,
        adv,
        incrementAdv,
        decrementAdv,
        dis,
        incrementDis,
        decrementDis,
        result,
        clearResult
      }}
    >
      <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
        Attack Roller
      </h2>
      <Card>
        <Card.Body>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-9 md:gap-3">
            <DiceButton dice="1d4" />
            <DiceButton dice="2d4" />
            <DiceButton dice="3d4" />
            <DiceButton dice="1d6" />
            <DiceButton dice="2d6" />
            <DiceButton dice="1d8" />
            <DiceButton dice="1d10" />
            <DiceButton dice="1d12" />
            <DiceButton dice="1d20" />
          </div>
        </Card.Body>
      </Card>
      <RollModal />
    </AttackRollerContext.Provider>
  );
};

export default AttackRoller;
