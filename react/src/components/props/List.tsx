import ListItem from "./ListItem";

export default function List({ items }: { items: string[] }) {
  const list = items.map((item) => {
    return <ListItem item={item} key={item} />;
  });

  return <ul>{list}</ul>;
}
