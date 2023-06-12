import { useState } from "react";
import Button from "./Button";
import Contador from "./Contador";
import "./css/state.scss";

export default function State() {
  const [string, setString] = useState("");
  return (
    <div className="state">
      <ul>
        <li>
          Crear un componente funcional que muestre un contador y tenga dos botones: uno para incrementar y otro para
          decrementar.
        </li>
        <li>
          Crear un componente funcional que muestre un string vacio y tenga dos botones: uno de incrementar y otro de
          decrementar. Cuando haga click en incrementar añadirá una letra al string y cuando haga click en decrementar
          quitará la última letra.
        </li>
        <li>
          Refactorizar el ejercicio anterior para que:
          <ol type="a">
            <li>Los botones sean componentes individuales</li>
            <li>El texto del contador sea un componente individual</li>
            <li>
              El componente Counter debe mangejar el estado y las funciones que lo actualizan, y se los pasará a sus
              hijos
            </li>
          </ol>
        </li>
      </ul>
      <h2>Solucion</h2>
      <Contador text={string} />
      <div className="counter-btns">
        <Button setString={setString} action={"incrementar"} />
        <Button setString={setString} action={"decrementar"} />
      </div>
    </div>
  );
}
