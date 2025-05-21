import "./App.css";
import { Meny } from "./components/Meny";
import menu from "./data/menu";
import corners from "./data/corners";

function App() {
  return (
    <>
      <Meny menu={menu} corners={corners} />
    </>
  );
}

export default App;
