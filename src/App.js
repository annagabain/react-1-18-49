import "./App.css";
import HooksCounter from "./components/HooksCounter";
import ClassCounter from "./components/ClassCounter";

function App() {
  return <div className="App">
      <HooksCounter name="Anna"/>
      <ClassCounter />
    </div>;
}

export default App;
