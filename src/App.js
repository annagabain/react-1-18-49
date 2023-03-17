import "./App.css";
import EventsFunctional from "./components/EventsFunctional";
import EventsClass from "./components/EventsClass";
import StatefulGreeting from "./components/StatefulGreeting";
import EventBinding from "./components/EventBinding"

import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import NestingComponents from "./components/NestingComponents";
// import UserMessage from "./components/UserMessage";
// import UserData from "./components/UserData";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";

import RenderingLists from "./components/RenderingLists";

function App() {
  return <div className="App">
    <h1>Rendering Lists</h1>

    <RenderingLists />
    <hr/>
    <hr/>

    <h1>Events</h1>
    <hr/>
    <MethodsAsPropsParent />
    <hr/>


    {/* <UserMessage/>
    <hr/>

    <UserData/>
    <hr/> */}

    <NestingComponents/>
    <hr/>

    <ConditionalRenderingClass/>
    <hr/>

    <ConditionalRenderingFunctional connected={false}/>
    <hr/>

    <p>event binding</p><EventBinding greeting="I am an event binding!"/>
    <hr/>

    <p>stateful greeting</p><StatefulGreeting/>
    <hr/>

    <EventsClass/>
    <hr/>

    <EventsFunctional/>

  </div>;
}

export default App;
