import { useState } from "react";
import { useHistory } from "react-router";
import { useValueContext } from "../../Providers/ValueContext";
import ButtonFavorite from "../../Components/ButtonFavorite";
import MessageError from "../../Components/MessageError";
import { ArrowIosBack } from "@styled-icons/evaicons-solid/ArrowIosBack";
import CardMusic from "../../Components/CardMusic";
import { FavoriteBorder, Favorite } from "@styled-icons/material";
import {
  Container,
  ButtonContainer,
  BackButton,
  Header,
  TempContainer,
  Temp,
  TempMinMax,
  CardContainer,
  BartButton,
} from "./style";

const ResultSearch = () => {
  const history = useHistory();
  const {
    setCity,
    data,
    catchError,
    setCatchError,
    playList,
    save,
    setSave,
    favoriteList,
    genre,
  } = useValueContext();

  const [heart, setHeart] = useState(false);

  const handleBackPage = () => {
    setCity("");
    setCatchError(false);
    history.push("/");
  };

  const handleFavorite = () => {
    setHeart(!heart);
    setSave([...save, favoriteList]);
  };

  return (
    <>
      {catchError ? (
        <MessageError />
      ) : (
        <Container>
          <ButtonContainer>
            <BackButton onClick={handleBackPage} title="Voltar">
              <ArrowIosBack className="backButton" />
            </BackButton>
            <ButtonFavorite />
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
          <CardContainer>
            <BartButton onClick={handleFavorite}>
              {heart ? (
                <Favorite className="iconHeart" />
              ) : (
                <FavoriteBorder className="iconHeart" />
              )}
            </BartButton>
            {playList.map((music) => (
              <CardMusic
                key={music.track.key}
                image={music.track.share.image}
                subject={music.track.share.subject}
                genre={genre}
                href={music.track.sharehref}
              />
            ))}

            <CardMusic
              image={"https://picsum.photos/200        "}
              subject={"titletitletitletitletitletitletitletitletitle"}
              genre={"rocl"}
              href={"https://google.com.br"}
            />
            <CardMusic
              image={"https://picsum.photos/200        "}
              subject={"title"}
              genre={"rocl"}
              href={"https://google.com.br"}
            />
            <CardMusic
              image={"https://picsum.photos/200        "}
              subject={"title"}
              genre={"rocl"}
              href={"https://google.com.br"}
            />
            <CardMusic
              image={"https://picsum.photos/200        "}
              subject={"title"}
              genre={"rocl"}
              href={"https://google.com.br"}
            />
            <CardMusic
              image={"https://picsum.photos/200        "}
              subject={"title"}
              genre={"rocl"}
              href={"https://google.com.br"}
            />
          </CardContainer>
        </Container>
      )}
    </>
  );
};

export default ResultSearch;
