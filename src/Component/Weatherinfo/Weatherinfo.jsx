import "./Weatherinfo.scss";
import ImgWeather from "../ImgComponent/ImgComponent";

import Typography from "@material-ui/core/Typography";
const Weatherinfo = ({ data }) => {
  return data ? (
    <>
      <Typography className="city" variant="h7" component="h2">
        {data.name}, {data.sys.country}
      </Typography>

      <div className="img-celcius">
        <ImgWeather main={data.weather[0].main} />
        <Typography className="celcius" variant="h4" component="h2">
          {(data.main.temp - 273).toFixed(2)}
        </Typography>

        <h4>°C</h4>
      </div>

      <Typography className="discription" variant="h8" component="h2">
        {data.weather[0].description.toUpperCase()}
      </Typography>

      <div className="humidity-wind">
        <span className="text1">{data.main.humidity}% Humidity</span>
        <span className="text2">{data.wind.speed}mps Wind</span>
      </div>

      <Typography className="discription" variant="h8" component="h2">
        Today's Forecast: {data.weather[0].main}
      </Typography>

      <div className="max-min">
        <span className="max">
          <b> Max: {(data.main.temp_max - 273).toFixed(2)}°C </b>
        </span>
        <span className="min">
          <b> Min: {(data.main.temp_min - 273).toFixed(2)}°C </b>
        </span>
      </div>
    </>
  ) : (
    <div className="nodata">
      Please Enter City Name to show its weather data...
    </div>
  );
};
export default Weatherinfo;
