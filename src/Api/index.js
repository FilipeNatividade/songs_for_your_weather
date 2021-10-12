import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.openweathermap.org",
});

export default Api;
