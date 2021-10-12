import axios from "axios";

export const ApiWeather = axios.create({
  baseURL: "https://api.openweathermap.org",
});

export const ApiShazam = axios.create({
  baseURL: "https://shazam.p.rapidapi.com/search",
});