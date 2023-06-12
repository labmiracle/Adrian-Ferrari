import { useState } from "react";
import "./css/select.scss";

export default function Select() {
  const [color, setColor] = useState("black");

  function changeColor(event: React.ChangeEvent<HTMLSelectElement>) {
    const color = event.target.value;
    setColor(() => color);
  }

  return (
    <>
      <label htmlFor="colors">Select a color:</label>
      <select id="colors" value={color} onChange={changeColor}>
        <option value="black">black</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
      </select>
      <div className={color + " circle"}>{color}</div>
    </>
  );
}
