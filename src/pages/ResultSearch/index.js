import { useEffect } from "react";
import { useHistory } from "react-router";
import { ApiWeather, ApiShazam } from "../../Api";
import { useValueContext } from "../../Providers/ValueContext";
import { ArrowIosBack } from "@styled-icons/evaicons-solid/ArrowIosBack";
import {
  Container,
  ButtonContainer,
  BackButton,
  Header,
  TempContainer,
  Temp,
  TempMinMax,
} from "./style";

const ResultSearch = () => {
  const history = useHistory();
  const { city, setCity, data, setData } = useValueContext();

  let date = new Date();

  useEffect(() => {
    const handleRequestWeather = () => {
      ApiWeather.get(
        `/data/2.5/weather?q=${city}&appid=c41474ebb5290999affd83b6cbbdb423&units=metric`
      ).then((response) => {
        console.log(response.data);
        setData({
          city: response.data.name,
          date: `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`,
          hour: `${date.getHours()}:${date.getMinutes()}`,
          temp: response.data.main.temp,
          temp_max: response.data.main.temp_max,
          temp_min: response.data.main.temp_min,
        });
      });
    };

    handleRequestWeather();
  }, [city]);

  useEffect(() => {
    const handleRequestShazam = () => {

    }
    handleRequestShazam
  }, []);

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
      <Header>
        <h2>
          {data.city}, {data.date}, {data.hour}
        </h2>
        <TempContainer>
          <Temp>{data.temp}</Temp>
          <TempMinMax>
            <span>{data.temp_min}</span>
            <span>{data.temp_max}</span>
          </TempMinMax>
        </TempContainer>
      </Header>
    </Container>
  );
};

export default ResultSearch;
