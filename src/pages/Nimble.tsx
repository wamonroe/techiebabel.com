import { useState } from "react";

import Card from "../components/Card";
import Container from "../components/Container";
import DiceButton from "../components/DiceButton";
import RollModal from "../components/RollModal";

const Nimble = () => {
  const [roleModalOpen, setRoleModalOpen] = useState(false);
  const [roll, setRoll] = useState("1d4");

  const handleRoll = (dice: string) => {
    return () => {
      setRoll(dice);
      setRoleModalOpen(true);
    };
  };

  return (
    <>
      <Container>
        <Card>
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Nimble Attack Roller
            </h3>
            <div className="mt-4 flex space-x-2">
              <DiceButton dice="1d4" onRoll={handleRoll} />
              <DiceButton dice="2d4" onRoll={handleRoll} />
              <DiceButton dice="3d4" onRoll={handleRoll} />
              <DiceButton dice="1d6" onRoll={handleRoll} />
              <DiceButton dice="2d6" onRoll={handleRoll} />
              <DiceButton dice="1d8" onRoll={handleRoll} />
              <DiceButton dice="1d10" onRoll={handleRoll} />
              <DiceButton dice="1d12" onRoll={handleRoll} />
            </div>
          </Card.Body>
          {/* <Card.Footer>Footer</Card.Footer> */}
        </Card>
      </Container>
      <RollModal roll={roll} open={roleModalOpen} onClose={setRoleModalOpen} />
    </>
  );
};

export default Nimble;
