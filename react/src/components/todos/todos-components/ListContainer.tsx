import List from "./List";
import "../css/listcontainer.scss";

export default function ListContainer() {
  return (
    <div className="todo-list-container">
      <>
        <p className={"todo-list-head todo-list-id"}>ID</p>
        <p className={"todo-list-head todo-list-task"}>Task</p>
        <p className={"todo-list-head todo-list-remove"}>Remove</p>
      </>
      <List />
    </div>
  );
}
