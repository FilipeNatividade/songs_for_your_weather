import { useValueContext } from "../../Providers/ValueContext";
import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";
import { Container } from "./style";
import { useHistory } from "react-router";

const MessageError = () => {
  const history = useHistory();
  const { setCatchError } = useValueContext();
  const handleCloseError = () => {
    history.push("/");
    setCatchError(false);
  };
  return (
    <Container>
      <button onClick={handleCloseError}>
        <CloseCircleOutline />
      </button>
      <p>Cidade não encontrada!</p>
    </Container>
  );
};
export default MessageError;
