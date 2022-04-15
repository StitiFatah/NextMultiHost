import { useEffect, useState } from "react";
import axios from "axios";

export default function TestTheme() {
  const [color, setColor] = useState({
    tailwindColor: "",
    inlineColor: "",
    tailwindDicColor: "",
  });

  const get_color = () => {
    axios.get("http://localhost:7000/test_get_color").then((response) => {
      console.log(response.status);
      setColor({
        tailwindColor: response.data.tailwindColor,
        inlineColor: response.data.inlineColor,
        tailwindDicColor: response.data.tailwindDicColor,
      });
    });
  };

  useEffect(() => {
    get_color();
  }, []);

  const tailwind_theme = {
    green: {
      text: "text-green-500",
    },
  };

  const { tailwindColor, inlineColor, tailwindDicColor } = color;

  return (
    <div>
      <h1
        // className={`text-3xl ${

        className={`text-3xl ${tailwindColor} `}

        // className="text-nblue"
      >
        Tailwind from config
      </h1>

      <h1
        className={` text-3xl ${
          tailwindDicColor && tailwind_theme[tailwindDicColor].text
        }
        }`}
      >
        Tailwind From dic
      </h1>

      <h1 style={{ fontSize: "1.875rem", color: `${inlineColor}` }}>
        Title inline CSS
      </h1>

      <div>
        {/* Tailwind color {&& */}
        {/* tailwind_theme[tailwindColor].text} */}
        {tailwindColor}
      </div>
      <div> Inline color {inlineColor} </div>
      <div> Tailwind Dic Color {tailwindDicColor} </div>
    </div>
  );
}
