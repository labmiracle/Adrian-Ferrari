import { useState } from "react";
import UpdatewithProps from "./UpdatewithProps";

//pasa los dos numeros de los inputs como props a una segunda funcion
export default function AdditionCalc() {
  const [numbers, setNumbers] = useState({
    number1: 0,
    number2: 0,
  });
  const [props, setProps] = useState(() => numbers);
  function handleNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const number = +e.currentTarget.value;
    const name = e.currentTarget.name;
    setNumbers((numbers) => ({ ...numbers, [name]: number }));
  }

  function changeProps() {
    setProps(() => numbers);
  }

  return (
    <>
      <input
        className="hooks-calc-number"
        type="number"
        name="number1"
        value={numbers.number1}
        onChange={handleNumberChange}
      />
      <span>+</span>
      <input
        className="hooks-calc-number"
        type="number"
        name="number2"
        value={numbers.number2}
        onChange={handleNumberChange}
      />
      <button onClick={changeProps}>=</button>
      <UpdatewithProps {...props} />
    </>
  );
}
