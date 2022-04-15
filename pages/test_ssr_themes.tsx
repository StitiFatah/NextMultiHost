import { useEffect, useState } from "react";
import axios from "axios";

export async function getServerSideProps() {
  const get_color = async () => {
    return await axios.get("http://localhost:7000/test_get_color/");
  };

  const resp = await get_color();
  const colors = await resp.data;

  console.log("colors", colors);

  return {
    props: {
      colors,
    },
  };
}

export default function TestSSRTheme({ colors }) {
  const tailwind_theme = {
    green: {
      text: "text-green-500",
    },
  };

  const [randomValue, setRandomValue] = useState(null);

  const get_random_value = async () => {
    const resp = await axios.get("http://localhost:7000/test_random_value/");
    const random_value = await resp.data;

    setRandomValue(random_value);
  };

  useEffect(() => {
    get_random_value();
  }, []);

  return (
    <div>
      <h1> {randomValue}</h1>

      <h1 className={`text-3xl ${colors.tailwindColor}`}> Title Tailwind </h1>
      <h1 style={{ fontSize: "1.875rem", color: `${colors.inlineColor}` }}>
        Title inline CSS
      </h1>
      <h1
        className={` text-3xl ${
          colors.tailwindDicColor &&
          tailwind_theme[colors.tailwindDicColor].text
        }
        }`}
      >
        Tailwind From dic
      </h1>

      <div> Tailwind color {colors.tailwindColor} </div>
      <div> Inline color {colors.inlineColor} </div>
    </div>
  );
}
