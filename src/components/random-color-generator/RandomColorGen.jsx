import React, { useState } from "react";
import "./RandomColorGen.css";

const RandomColorGen = () => {
  const [colorType, setColorType] = useState("hex");
  const [colorCode, setColorCode] = useState("#D3D3D3");

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

  function createRgbCode() {}

  return (
    <div className="container" style={{ "--bg-color": colorCode }}>
      <button onClick={() => setColorType("hex")}>create hex code</button>
      <button onClick={() => setColorType("rgb")}>create rgb code</button>
      <button
        onClick={() =>
          colorType === "hex" ? createHexCode() : createRgbCode()
        }
      >
        Generate random color
      </button>
    </div>
  );
};

export default RandomColorGen;
