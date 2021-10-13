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
  const { city, setCity, data, setData, setCatchError } = useValueContext();

  let date = new Date();

  useEffect(() => {
    const handleRequestWeather = () => {
      ApiWeather.get(
        `/data/2.5/weather?q=${city}&appid=c41474ebb5290999affd83b6cbbdb423&units=metric`
      )
        .then((response) => {
          console.log(response.status);
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
        })
        .catch((error) => {
          error && setCatchError(true);
        });
    };

    handleRequestWeather();
    !city && history.push("/");
  }, [city]);

  useEffect(() => {
    const handleRequestShazam = () => {
      ApiShazam.get("/search", {
        params: { term: "lofi", offset: "0", limit: "5" },
        headers: {
          "x-rapidapi-host": "shazam.p.rapidapi.com",
          "x-rapidapi-key":
            "5b67e7c49fmshba6fdc7a8879edbp1bab60jsn55691e8d046b",
        },
      }).then((response) => {
        // console.log("href =>", response.data.tracks.hits[0].track.share.href);
        // console.log("image =>", response.data.tracks.hits[0].track.share.image);
        // console.log("subject =>",  response.data.tracks.hits[0].track.share.subject
        // );
      });
    };
    handleRequestShazam();
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
      <Header>
        <h2>
          {data.city}, {data.date}, {data.hour}
        </h2>
        <TempContainer>
          <Temp>{data.temp}°</Temp>
          <TempMinMax>
            <span>{data.temp_min}°</span>
            <span>{data.temp_max}°</span>
          </TempMinMax>
        </TempContainer>
      </Header>
    </Container>
  );
};

export default ResultSearch;
