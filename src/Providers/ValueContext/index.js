import { createContext, useContext, useEffect, useState } from "react";
import { ApiWeather, ApiShazam } from "../../Api";
import { useHistory } from "react-router";

const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const history = useHistory();
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    city: "",
    date: "",
    hour: "",
    temp: "",
    temp_max: "",
    temp_min: "",
  });
  const [catchError, setCatchError] = useState(false);
  const [playList, setPlayList] = useState([]);
  const [save, setSave] = useState([]);
  const [favoriteList, SetFavoriteList] = useState({});
  const [genre, setGenre] = useState("");

  let date = new Date();

  useEffect(() => {
    const handleRequestShazam = async () => {
      await ApiShazam.get("/search", {
        params: { term: genre, offset: "0", limit: "5" },
        headers: {
          "x-rapidapi-host": "shazam.p.rapidapi.com",
          "x-rapidapi-key":
            "1bccdac77cmshff48e91b8564a33p1ed820jsn291d9f39c12e",
        },
      }).then((response) => {
        setPlayList(response.data.tracks.hits);
        SetFavoriteList({
          date: data.date,
          playList: response.data.tracks.hits,
          wearther: data.temp,
          city: city,
          category: genre,
        });
      });
    };

    const handleRequestWeather = async () => {
      await ApiWeather.get(
        `/data/2.5/weather?q=${city}&appid=c41474ebb5290999affd83b6cbbdb423&units=metric`
      )
        .then((response) => {
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

      if (data.temp >= 32) {
        setGenre("rock");
      } else if ((data.temp <= 31) & (data.temp > 24)) {
        setGenre("pop");
      } else if ((data.temp <= 23) & (data.temp > 16)) {
        setGenre("classic");
      } else if (data.temp <= 16) {
        setGenre("lofi");
      }

      genre && handleRequestShazam();
    };
    city.length && handleRequestWeather();
    !city && history.push("/");
  }, [city, genre]);

  useEffect(() => {
    let playListStryngfy = JSON.stringify(save);
    localStorage.setItem("favoriteList2", playListStryngfy);
  }, [save, playList]);

  return (
    <ValueContext.Provider
      value={{
        city,
        setCity,
        data,
        setData,
        catchError,
        setCatchError,
        playList,
        setPlayList,
        save,
        setSave,
        favoriteList,
        SetFavoriteList,
        genre,
        setGenre,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};

export const useValueContext = () => useContext(ValueContext);
