import "./App.css";
import EventsFunctional from "./components/EventsFunctional";
import EventsClass from "./components/EventsClass";
import StatefulGreeting from "./components/StatefulGreeting";
import EventBinding from "./components/EventBinding"

function App() {
  return <div className="App">
    <h1>Events</h1>
    <EventsFunctional/>
    <EventsClass/>
    <p>stateful greeting</p><StatefulGreeting/>
    <p>event binding</p><EventBinding greeting="I am an event binding!"/>
  </div>;
}

export default App;
