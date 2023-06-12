import { useState } from "react";
import "./css/input.scss";

export default function Input() {
  const [input, setInput] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;
    setInput(() => input);
  }

  return (
    <>
      <label htmlFor="input-box">Insert text:&nbsp;</label>
      <input
        className="events-input-box"
        type="text"
        id="input-box"
        name="input"
        value={input}
        onChange={handleChange}
      />
      <div className="events-input-text">
        <p>Text:&nbsp;</p>
        <p>{input}</p>
      </div>
    </>
  );
}
