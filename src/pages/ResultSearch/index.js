import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ApiWeather, ApiShazam } from "../../Api";
import { useValueContext } from "../../Providers/ValueContext";
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
} from "./style";

const ResultSearch = () => {
  const history = useHistory();
  const {
    city,
    setCity,
    data,
    setData,
    catchError,
    setCatchError,
    playList,
    setPlayList,
    salve,
    setSalve,
    favoriteList,
    SetFavoriteList,
    genre,
    setGenre,
  } = useValueContext();

  const handleBackPage = () => {
    setCity("");
    setCatchError(false);
    history.push("/");
  };

  const handleFavorite =() => {
    setSalve([...salve, favoriteList]);
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
          <div>
            <button onClick={handleFavorite}>
              <FavoriteBorder style={{ width: "25px" }} />
            </button>
            {playList.map((music) => (
              <CardMusic
                key={music.track.key}
                image={music.track.share.image}
                subject={music.track.share.subject}
                genre={genre}
                href={music.track.sharehref}
              />
            ))}
          </div>
        </Container>
      )}
    </>
  );
};

export default ResultSearch;
