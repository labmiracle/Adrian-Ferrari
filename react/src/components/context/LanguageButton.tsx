import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function LanguageButton() {
  const { setLanguage } = useContext(LanguageContext);

  function changeLang() {
    setLanguage((prev) => (prev === "español" ? "english" : "español"));
  }

  return <button onClick={changeLang}>Change Language</button>;
}
