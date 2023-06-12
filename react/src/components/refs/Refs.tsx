import { useRef, useState } from "react";
import "./css/ref.scss";

export default function Refs() {
  const [submited, setSubmited] = useState(false);

  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("input 1: ", ref1.current?.value);
    console.log("input 2: ", ref2.current?.value);
    setSubmited(true);
  }

  return (
    <div className="ref-container">
      <p>
        Crear un pequeño formulario con dos campos de texto. Cuando se le de a enviar obtener los valores de los inputs
        e imprimirlos en la consola.
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={ref1} placeholder="write here"></input>
        <input type="text" ref={ref2} placeholder="write here"></input>
        <button>Submit</button>
      </form>
      <p style={{ minHeight: 20 }}>{submited && "Printed in the console!"}</p>
    </div>
  );
}
