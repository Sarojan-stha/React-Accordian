import React, { useEffect, useState } from "react";
import "./RandomColorGen.css";

const RandomColorGen = () => {
  const [colorType, setColorType] = useState("hex");
  const [colorCode, setColorCode] = useState("#D3D3D3");

  useEffect(() => {
    colorType === "hex" ? createHexCode() : createRgbCode();
  }, [colorType]);

  function randomColorUtility(length) {
    const random = Math.floor(Math.random() * length);
    return random;
  }

  function createHexCode() {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexValue = "#";
    for (let i = 0; i < 6; i++) {
      hexValue += values[randomColorUtility(10)];
    }

    setColorCode(hexValue);
  }

  function createRgbCode() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColorCode(`rgb(${r},${g},${b})`);
  }

  return (
    <div className="container" style={{ "--bg-color": colorCode }}>
      <h1>Random Color Generator</h1>
      <div className="button-container">
        <button onClick={() => setColorType("hex")}>Create Hex code</button>
        <button onClick={() => setColorType("rgb")}>Create RGB code</button>
        <button
          onClick={() =>
            colorType === "hex" ? createHexCode() : createRgbCode()
          }
        >
          Generate Random Color
        </button>
      </div>

      <div className="color-code">{`${colorType} : ${colorCode}`}</div>
    </div>
  );
};

export default RandomColorGen;
