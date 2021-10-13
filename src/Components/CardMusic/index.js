import { useValueContext } from "../../Providers/ValueContext";
import { Link } from "react-router-dom";
import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";
import { Container } from "./style";
import { useHistory } from "react-router";

const CardMusic = () => {
  return (
    <Container>
      <img src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/11/Como-Criar-um-Site.png" alt="lala"/>
      <h3>Title</h3>
      <Link href="https://www.shazam.com/pt/track/428558287/sunset">Shazam</Link>
    </Container>
  );
};
export default CardMusic;
