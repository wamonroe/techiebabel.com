import ActionTrackers from "../components/ActionTrackers";
import AttackRoller from "../components/AttackRoller";
import Container from "../components/Container";

const Nimble = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col space-y-6">
          <AttackRoller />
          <ActionTrackers />
        </div>
      </Container>
    </>
  );
};

export default Nimble;
