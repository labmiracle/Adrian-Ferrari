import { useState } from "react";
import "./css/json.scss";

export default function Json() {
  const [json, setJson] = useState("");

  async function getJson() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    const text = JSON.stringify(data, undefined, 4);
    setJson(() => text);
  }

  return (
    <div className="json">
      <button onClick={getJson}>Get Json</button>
      <textarea value={json} readOnly cols={40} rows={6}></textarea>
    </div>
  );
}
