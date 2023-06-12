import { useState, useEffect, useRef } from "react";

//calcula la suma de los props e imprime por consola
export default function UpdatewithProps({ number1 = 0, number2 = 0 }: { number1: number; number2: number }) {
  const [numbers, setNumbers] = useState({ number1, number2 });
  const firstUpdate = useRef(true);
  const result = +numbers.number1 + +numbers.number2;

  useEffect(() => {
    //firstUpdate previene el console.log cuando se monta el componente
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      setNumbers(() => ({ number1, number2 }));
      console.log("Actualizado!");
    }
  }, [number1, number2]);

  return (
    <>
      <span>{result}</span>
    </>
  );
}
