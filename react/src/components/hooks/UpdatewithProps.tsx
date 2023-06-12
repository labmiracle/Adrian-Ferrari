import { useState, useEffect } from "react";

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

//calcula la suma de los props e imprime por consola
function UpdatewithProps({ number1, number2 }: { number1: number; number2: number }) {
  const [numbers, setNumbers] = useState({ number1, number2 });

  const result = +numbers.number1 + +numbers.number2;

  useEffect(() => {
    setNumbers(() => ({ number1, number2 }));
    console.log("Actualizado!");
  }, [number1, number2]);

  return (
    <>
      <span>{result}</span>
    </>
  );
}
