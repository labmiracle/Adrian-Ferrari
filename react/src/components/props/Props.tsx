import { useState } from "react";
import Loading from "./Loading";
import "./css/props.scss";

export default function Props() {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="props">
      <Loading isLoading={isLoading} />
      {isLoading && (
        <button className="load-btn" onClick={() => setLoading(() => false)}>
          Cargar
        </button>
      )}
    </div>
  );
}
