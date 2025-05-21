import "./App.css";
import { Meny } from "./components/Meny";
import menu from "./data/menu";

function App() {
  return (
    <>
      <Meny menu={menu} />
    </>
  );
}

export default App;
