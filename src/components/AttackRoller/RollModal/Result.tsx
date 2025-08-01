import { useContext } from "react";
import { AttackRollResult } from "../../../lib/dice";

import Button from "../../Button";
import Modal from "../../Modal";
import AttackRollerContext from "../AttackRollerContext";
import DiceIcon from "./DiceIcon";

type ResultProps = {
  result: AttackRollResult;
};

const resultTitle = (result: AttackRollResult) => {
  if (result.status === "Miss") {
    return result.status;
  } else {
    return `${result.status} for ${result.total} damage`;
  }
};

const Result = ({ result }: ResultProps) => {
  const { clearResult } = useContext(AttackRollerContext);

  const primaryDice = [result.rolls[0], ...result.discardedRolls];
  const otherDice = result.rolls.slice(1);
  const critDice = result.critRolls;

  return (
    <>
      <Modal.Content>
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
          <DiceIcon />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <Modal.Title>{resultTitle(result)}</Modal.Title>
          <div className="mt-2">
            <p>
              {result.dice} &#91;
              <span className="text-blue-700">
                {primaryDice.length > 1 ? (
                  <>
                    &#91;{primaryDice[0]}
                    <span className="text-sm">, {primaryDice.slice(1).join(", ")}</span>
                    &#93; = {primaryDice[0]}
                  </>
                ) : (
                  primaryDice[0]
                )}
              </span>
              {otherDice.length > 0 && (
                <>
                  {", "}
                  <span>{otherDice.join(", ")}</span>
                </>
              )}
              {critDice.length > 0 && (
                <>
                  {", "}
                  <span className="text-red-700">{critDice.join(", ")}</span>
                </>
              )}
              &#93; = {result.total}
            </p>
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button className="w-full" onClick={clearResult}>
          Roll Again
        </Button>
      </Modal.Actions>
    </>
  );
};

export default Result;
