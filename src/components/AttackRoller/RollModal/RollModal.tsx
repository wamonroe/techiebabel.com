import { useContext } from "react";

import AttackRollerContext from "../AttackRollerContext";
import Content from "./Content";
import Modal from "../../Modal";
import Result from "./Result";

const RollModal = () => {
  const { closeModal, modalOpen, result } = useContext(AttackRollerContext);

  return (
    <Modal open={modalOpen} onClose={closeModal}>
      {result ? <Result result={result} /> : <Content />}
    </Modal>
  );
};

export default RollModal;
