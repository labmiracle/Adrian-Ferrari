import { useState } from "react";

export default function AtoB() {
  const [text, setText] = useState("");

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const text = e.target.value;
    const newText = text.replace(/a/g, "b").replace(/A/g, "B");
    setText(() => newText);
  }
  return (
    <>
      <p>Las 'a' y 'A' se transformaran en 'b' y 'B'</p>
      <p>Escriba:</p>
      <textarea value={text} onChange={handleTextChange} spellCheck="false"></textarea>
    </>
  );
}
