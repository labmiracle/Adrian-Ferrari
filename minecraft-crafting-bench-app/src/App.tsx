import "./App.scss";
import CraftingGrid from "./components/CraftingGrid";
import Ingredients from "./components/Ingredients";
import ResultCell from "./components/ResultCell";
import Craftables from "./components/Craftables";
import ResetTable from "./components/ResetTable";
import DragDropContextProvider from "./context/DragDropContext";
import { ReactComponent as Arrow } from "./assets/right-arrow.svg";

function App() {
  return (
    <DragDropContextProvider>
      <main className="app">
        <h1 className="section-title">Crafting</h1>
        <section className="crafting-section">
          <div className="table-grid">
            <CraftingGrid />
          </div>
          <div className="arrow">
            <Arrow />
          </div>
          <div className="result">
            <ResultCell />
          </div>
        </section>
        <div className="reset-table">
          <ResetTable />
        </div>
        <h1 className="section-title">Ingredients</h1>
        <div className="ingredients">
          <Ingredients />
        </div>
        <h1 className="section-title">Craftables</h1>
        <div className="craftables">
          <Craftables />
        </div>
      </main>
    </DragDropContextProvider>
  );
}

export default App;
