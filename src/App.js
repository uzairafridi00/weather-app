import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";

import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";

import { TbTemperatureCelsius } from "react-icons/tb";
import { ImSpinner8 } from "react-icons/im";

// 121a1e9098930ed3016ffe8aa84b5752
const APIKey = "121a1e9098930ed3016ffe8aa84b5752";

const App = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Peshawar");

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}`;
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [location]);

  // console.log(data);

  if (!data) {
    return (
      <div>
        <div>
          <ImSpinner8 className="text-5xl animate-spin" />
        </div>
      </div>
    );
  }

  // set the icon according to the weather
  let icon;
  // console.log(data.weather[0].main);
  // eslint-disable-next-line default-case
  switch (data.weather[0].main) {
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill />;
      break;
    case "Rain":
      icon = <IoMdRainy className="text-[#31cafb]" />;
      break;
    case "Clear":
      icon = <IoMdSunny className="text-[#ffde33]" />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill className="text-[#31cafb]" />;
      break;
    case "Snow":
      icon = <IoMdSnow className="text-[#31cafb]" />;
      break;
    case "Thunderstorm":
      icon = <IoMdThunderstorm />;
      break;
  }
  return (
    <>
      <div className="w-full h-screen bg-gradientBg">
        {/* form */}
        <form>form</form>
        {/* card */}
        <div>
          <div>
            {/* card top */}
            <div>card top</div>
            {/* card body */}
            <div>card body</div>
            {/* card bottom */}
            <div>card bottom</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
