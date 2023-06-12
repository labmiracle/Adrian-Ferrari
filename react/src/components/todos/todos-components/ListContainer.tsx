import List from "./List";
import "../css/listcontainer.scss";

export default function ListContainer() {
  return (
    <div className="todo-list-container">
      <>
        <p className="todo-list-head">ID</p>
        <p className="todo-list-head">Task</p>
        <p className="todo-list-head">Remove</p>
      </>
      <List />
    </div>
  );
}
