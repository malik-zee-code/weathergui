const ImgComponent = ({ main }) => {
  return main === "Clear" ? (
    <>
      <img
        className="img"
        alt="clear"
        src="https://cdn-icons-png.flaticon.com/128/146/146199.png"
      />
    </>
  ) : main === "Clouds" ? (
    <>
      <img
        className="img"
        alt="cloudy"
        src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
      />
    </>
  ) : main === "Rain" ? (
    <>
      <img
        className="img"
        alt="rain"
        src="https://cdn-icons-png.flaticon.com/128/3217/3217172.png"
      />
    </>
  ) : main === "Thunderstorm" ? (
    <>
      <img
        className="img"
        alt="thunder"
        src="https://cdn-icons-png.flaticon.com/128/1146/1146914.png"
      />
    </>
  ) : main === "Mist" ||
    main === "Smoke" ||
    main === "Haze" ||
    main === "Dust" ||
    main === "Fog" ||
    main === "Ash" ||
    main === "Squall" ||
    main === "Tornado	" ? (
    <>
      <img
        className="img"
        alt="smoky"
        src="https://cdn-icons-png.flaticon.com/128/3501/3501787.png"
      />
    </>
  ) : (
    <>Not found</>
  );
};

export default ImgComponent;
