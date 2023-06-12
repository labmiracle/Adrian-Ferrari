import ListContainer from "./todos-components/ListContainer";
import AddTaskSection from "./todos-components/AddTaskSection";

export default function Todos() {
  return (
    <main>
      <ListContainer />
      <AddTaskSection />
    </main>
  );
}
