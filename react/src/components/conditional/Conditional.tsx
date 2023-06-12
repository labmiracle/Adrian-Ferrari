import { useState } from "react";
import Logged from "./Logged";
import LogIn from "./LogIn";
import "./css/conditional.scss";

export default function Conditional() {
  const [isLogged, setLogged] = useState(false);
  return (
    <div className="conditional-container">
      <p>
        Queremos tener una página que solo se muestre cuando estamos logueado. Cuando estamos logueados se mostrará un
        texto que dira "Esta página solo puedo verla por que estoy logueado" y un botón de cerrar sesión. Cuando NO esté
        logueado mostrará un botón de ingreso y un mensaje de "Inicia sesión para ver contenido privado"
      </p>
      <div className="conditional">{isLogged ? <Logged setLogged={setLogged} /> : <LogIn setLogged={setLogged} />}</div>
    </div>
  );
}
