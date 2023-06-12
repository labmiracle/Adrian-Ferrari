import MainText from "./MainText";
import LanguageButton from "./LanguageButton";
import LangContextProvider from "./LanguageContext";

export default function AppWithContext() {
  return (
    <LangContextProvider>
      <p>Crear una aplicacion que contenga los siguientes componentes:</p>
      <ul>
        <li>MainText: Incluir dos componentes que sean una etiqueta</li>
        <li>Button</li>
      </ul>
      <p>
        El texto de los componentes se puede ver en español o en inglés dependiendo de lo que se le pase por el Context.
        Si pulsamos el boton el idioma deberia cambiar
      </p>
      <h2>Solucion</h2>
      <MainText />
      <LanguageButton />
    </LangContextProvider>
  );
}
