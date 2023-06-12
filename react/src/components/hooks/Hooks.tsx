import AtoB from "./AtoB";
import Unmount from "./Unmount";
import AdditionCalc from "./UpdatewithProps";
import AllTasks from "./AllTasks";
import "./css/hooks.scss";

export default function Hooks() {
  return (
    <div className="hooks">
      <div className="hooks-atob">
        <p className="hooks-statement">
          1 - Crear un componente funcional que sea un campo de texto y cuando escribamos algo cambie las ”a” por las
          ”b”
        </p>
        <AtoB />
      </div>
      <div className="hooks-unmount">
        <p className="hooks-statement">
          2 - Crear un componente funcional que cuando desaparezca imprima por consola ”Desmontado!”
        </p>
        <Unmount />
      </div>
      <div className="hooks-addcalc">
        <p className="hooks-statement">
          3 - Crear un componente funcional que cuando reciba nuevas props del padre imprima por consola ”Actualizando!”
        </p>
        <AdditionCalc />
      </div>
      <div className="hooks-alltasks">
        <p className="hooks-statement">
          4 - Crear un componente funcional que llame a la API https://jsonplaceholder.typicode. com/todos y pinte las
          tareas
        </p>
        <p className="hooks-statement">
          &nbsp;&nbsp;&nbsp;&nbsp;Extrar la lógica de la llamada a la API a un hook personalizado y usarlo
        </p>
        <AllTasks />
      </div>
    </div>
  );
}
