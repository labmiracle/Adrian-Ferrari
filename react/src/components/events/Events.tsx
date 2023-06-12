import Json from "./Json";
import Input from "./Input";
import Select from "./Select";
import "./css/events.scss";

export default function Events() {
  return (
    <div className="events">
      <div className="events-json">
        <p>
          1 - Crear un componente funcional que al pulsar un boton llame a https://jsonplaceholder. typicode.com/todos/1
          y pinte el JSON
        </p>
        <Json />
      </div>
      <div className="events-input">
        <p>2 - Crear un componente que pinte el texto que estamos escribiendo en input</p>
        <Input />
      </div>
      <div className="events-select">
        <p>3 - Crear un componente que muestre el value seleccionado de una etiqueta &lt;select&gt;</p>
        <Select />
      </div>
    </div>
  );
}
