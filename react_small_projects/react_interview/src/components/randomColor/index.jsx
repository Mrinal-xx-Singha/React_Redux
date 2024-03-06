import { useEffect, useState } from "react";
import "./index.css";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function utility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHEXColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[utility(hex.length)];
    }
    // console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRandomRGBColor() {
    const r = utility(256);
    const g = utility(256);
    const b = utility(256);

    setColor(`rgb (${r},${g},${b})`);
    // console.log(setColor)
  }
  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRGBColor();
    else handleCreateRandomHEXColor();
  }, [typeOfColor]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
      className="container"
    >
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHEXColor
            : handleCreateRandomRGBColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX color "}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
