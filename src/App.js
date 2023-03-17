import "./App.css";
import EventsFunctional from "./components/EventsFunctional";
import EventsClass from "./components/EventsClass";
import StatefulGreeting from "./components/StatefulGreeting";
import EventBinding from "./components/EventBinding"

import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";

function App() {
  return <div className="App">
    <h1>Events</h1>
    {/* <EventsFunctional/>
    <EventsClass/>
    <p>stateful greeting</p><StatefulGreeting/>
    <p>event binding</p><EventBinding greeting="I am an event binding!"/> */}
    <hr/>
    <ConditionalRenderingFunctional connected={false}/>
    <hr/>
    <ConditionalRenderingClass/>

  </div>;
}

export default App;
