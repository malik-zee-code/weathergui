import axios from "axios";

const API_KEY = "1bb5f6fcb3a136564598d587570c5d7a";
const URL = "https://api.openweathermap.org/data/2.5/weather";

const Getdata = async (city) => {
  return await axios.get(`${URL}?q=${city}&appid=${API_KEY}`);
};
export default Getdata;
