import TextEnglish from "./TextEnglish";
import TextSpanish from "./TextSpanish";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function MainText() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      {language === "español" && <TextSpanish />}
      {language === "english" && <TextEnglish />}
    </>
  );
}
