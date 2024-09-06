import Button from "./Button";

type DiceButtonProps = {
  dice: string;
  onRoll: (dice: string) => () => void;
};

const DiceButton = ({ dice, onRoll }: DiceButtonProps) => {
  return (
    <Button color="secondary" onClick={onRoll(dice)}>
      {dice}
    </Button>
  );
};

export default DiceButton;
