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
  const [location, setLocation] = useState("Islamabad");
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIKey}`;
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [location]);

  console.log(data);

  if (!data) {
    return (
      <div>
        <div
          className="flex flex-col 
      items-center justify-center"
        >
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

  // Date Object
  const date = new Date();

  return (
    <>
      <div
        className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col 
      items-center justify-center px-4 lg:px-0"
      >
        {/* form */}
        <form
          onChange={(e) => handleInput(e)}
          className="h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px]
        mb-8"
        >
          <div className="h-full relative flex items-center justify-between p-2">
            <input
              type="text"
              placeholder="Search by City or Country..."
              className="flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px]
              font-light pl-6 h-full"
            />
            <button
              className="bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center
            transition"
            >
              <IoMdSearch className="text-2xl text-white" />
            </button>
          </div>
        </form>

        {/* card */}
        <div
          className="w-full max-w-[450px] bg-black/20 min-h-[584px] text-white backdrop-blur-[32px] 
        rounded-[32px] py-12 px-6"
        >
          <div>
            {/* card top */}
            <div className="flex items-center gap-x-5">
              {/* icon */}
              <div className="text-[87px]">{icon}</div>
              <div>
                {/* country name */}
                <div className="text-2xl font-semibold">
                  {data.name}, {data.sys.country}
                </div>
                {/* date */}
                <div>
                  {date.getUTCDate()}/{date.getUTCMonth() + 1}/
                  {date.getUTCFullYear()}
                </div>
              </div>
            </div>
            {/* card body */}
            <div className="my-20">
              <div className="flex justify-center items-center">
                <div className="text-[144px] leading-none font-light">
                  {parseInt(data.main.temp)}
                </div>
                <div className="text-4xl">{<TbTemperatureCelsius />}</div>
              </div>
              <div className="capitalize text-center">
                {data.weather[0].description}
              </div>
            </div>
            {/* card bottom */}
            <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
              <div className="flex justify-between">
                <div className="flex items-center gap-x-2">
                  {/* icons */}
                  <div className="text-[20px]">
                    <BsEye />
                  </div>
                  <div>
                    Visibility
                    <span className="ml-2">{data.visibility / 1000} km</span>
                  </div>
                </div>

                <div className="flex items-center gap-x-2">
                  {/* icons */}
                  <div className="text-[20px]">
                    <BsThermometer />
                  </div>
                  <div className="flex">
                    Feels Like
                    <span className="flex ml-2">
                      {parseInt(data.main.feels_like)}
                      <TbTemperatureCelsius />
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-x-2">
                  {/* icons */}
                  <div className="text-[20px]">
                    <BsWater />
                  </div>
                  <div>
                    Humidity
                    <span className="ml-2">{data.main.humidity} %</span>
                  </div>
                </div>

                <div className="flex items-center gap-x-2">
                  {/* icons */}
                  <div className="text-[20px]">
                    <BsWind />
                  </div>
                  <div>
                    Wind
                    <span className="ml-2">{data.wind.speed} m/s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
