import "./App.css";
import EventsFunctional from "./components/EventsFunctional";
import EventsClass from "./components/EventsClass";

function App() {
  return <div className="App">
    <h1>Events</h1>
    <EventsFunctional/>
    <EventsClass/>
  </div>;
}

export default App;
