import "./App.css";
import Component1 from "./Components/Component1-thow-error";
// import Navigation from "./Components/Navigation-without-routing";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Learn React</p> 
          <Component1 />
          <Component1 />
        </header>
      </div>
    </>
  );
}

export default App;
