import { useEffect, useState } from "react";

//funcion que desmonta la segunda
export default function Unmount() {
  const [mounted, setMounted] = useState(true);

  return (
    <>
      <button onClick={() => setMounted((prev) => !prev)}>Toggle Component</button>
      {mounted && <Function />}
    </>
  );
}

//cuando se desmonta genera un mensaje
function Function() {
  useEffect(() => {
    return () => {
      console.log("Unmounted!");
    };
  }, []);
  return (
    <>
      <p>&lt;&gt;</p>
      <p>Componente Montado</p>
      <p>&lt;/&gt;</p>
    </>
  );
}
