import Title from "./Title";
import Text from "./Text";
import List from "./List";
import Link from "./Link";
import "./css/loading.scss";

export default function Loading({ isLoading }: { isLoading: boolean }) {
  const title = "Necesito partir en componentes todo esto";
  const text = `Para ello puedo usar React que me permitirá reutilizar todos esos
  componentes. Para ello tengo que:`;
  const items = [
    "Observar el HTML",
    "Pensar en cómo puedo extraer cada parte en componentes",
    "Usarlos, o mejor dicho, reusarlos en React",
  ];

  return (
    <div className="loading">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Title title={title} />
          <Text text={text} />
          <List items={items} />
          <Link openInNewTab={true} />
        </>
      )}
    </div>
  );
}
