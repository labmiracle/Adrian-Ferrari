import Title from "./Title";
import Text from "./Text";
import List from "./List";
import Link from "./Link";
import "./css/loading.scss";
import { useState } from "react";

export default function Loading({ isLoading }: { isLoading: boolean }) {
  const [openInNewTab, setOpenInNewTab] = useState(true);
  const title = "Necesito partir en componentes todo esto";
  const text = `Para ello puedo usar React que me permitirá reutilizar todos esos
  componentes. Para ello tengo que:`;
  const items = [
    "Observar el HTML",
    "Pensar en cómo puedo extraer cada parte en componentes",
    "Usarlos, o mejor dicho, reusarlos en React",
  ];

  function handleCheckbox() {
    setOpenInNewTab(!openInNewTab);
  }

  return (
    <div className="loading">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="loading-parts">
          <Title title={title} />
          <Text text={text} />
          <List items={items} />
          <div className="props-link">
            <Link openInNewTab={true} />
            <label htmlFor="props-checkbox">abrir en otra tab?</label>
            <input id="props-checkbox" type="checkbox" checked={openInNewTab} onChange={handleCheckbox} />
          </div>
        </div>
      )}
    </div>
  );
}
