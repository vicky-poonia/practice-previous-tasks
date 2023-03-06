import "./App.css";
import Component1 from "./Components/Component1-thow-error";
import Navigation1 from "./Components/Navigation-without-routing";
import DragandDrop from "./Components/DragandDrop";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Learn React</p>
          <Component1 />
          <Navigation1 />
          <DragandDrop />
        </header>
      </div>
    </>
  );
}

export default App;
