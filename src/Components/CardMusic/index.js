// import { useValueContext } from "../../Providers/ValueContext";
import { Link } from "react-router-dom";
// import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";
import { Container, Coverart } from "./style";
// import { useHistory } from "react-router";

const CardMusic = ({ image, subject,genre, href }) => {
  return (
    <Container>
      <Coverart src={image} alt={subject} />
      <h2>{subject}</h2>
      <p>{genre}</p>
      <a href={href}>shazam</a>
    </Container>
  );
};
export default CardMusic;
