import { useState } from "react";
import Loading from "./Loading";
import "./css/props.scss";

export default function Props() {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="props">
      <p>
        Crear un componente llamado Loading que si su prop show es verdadera muestre sus hijos. Si es falsa muestre un
        mensaje: Loading...
      </p>
      <Loading isLoading={isLoading} />
      {isLoading && (
        <button className="load-btn" onClick={() => setLoading(() => false)}>
          Show
        </button>
      )}
    </div>
  );
}
