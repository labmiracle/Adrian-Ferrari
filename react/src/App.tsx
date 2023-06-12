import { Outlet, NavLink } from "react-router-dom";
import "./App.scss";

function App() {
  const isActive = ({ isActive }: { isActive: boolean }) => (isActive ? "active" : "inactive");

  return (
    <div className="app">
      <nav className="app-nav">
        <NavLink className={isActive} to={"/"}>
          Caratula
        </NavLink>
        <NavLink className={isActive} to={"props"}>
          Props
        </NavLink>
        <NavLink className={isActive} to={"state"}>
          State
        </NavLink>
        <NavLink className={isActive} to={"events"}>
          Events
        </NavLink>
        <NavLink className={isActive} to={"conditional"}>
          Conditional
        </NavLink>
        <NavLink className={isActive} to={"refs"}>
          Refs
        </NavLink>
        <NavLink className={isActive} to={"context"}>
          Context
        </NavLink>
        <NavLink className={isActive} to={"hoc"}>
          Hoc
        </NavLink>
        <NavLink className={isActive} to={"hooks"}>
          Hooks
        </NavLink>
        <NavLink className={isActive} to={"todo"}>
          TODO
        </NavLink>
      </nav>
      <div className="outlet">
        <div className="outlet-in-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
