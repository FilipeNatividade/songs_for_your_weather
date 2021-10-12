import { useEffect } from "react";
import { useHistory } from "react-router";
import Api from "../../Api";
import { useValueContext } from "../../Providers/ValueContext";
import { ArrowIosBack } from "@styled-icons/evaicons-solid/ArrowIosBack";
import { Container, ButtonContainer, BackButton } from "./style";

const ResultSearch = () => {
  const history = useHistory()
  const { city, setCity } = useValueContext();

  useEffect(() => {
    const handleRequest = () => {
      Api.get(
        `/data/2.5/weather?q=${city}&appid=c41474ebb5290999affd83b6cbbdb423&units=metric`
      ).then((response) => console.log(response.data));
    };

    handleRequest();
  }, [city]);

  const handleBackPage = () => {
    setCity("");
    history.push("/");
  };

  return (
    <Container>
      <ButtonContainer>
        <BackButton onClick={handleBackPage} title="Voltar">
          <ArrowIosBack className="backButton" />
        </BackButton>
      </ButtonContainer>
    </Container>
  );
};

export default ResultSearch;
