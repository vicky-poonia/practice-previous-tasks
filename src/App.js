import "./App.css";
import Component1 from "./Components/Component1-thow-error";
// import Contact from "./Components/Contact";
import Navigation1 from "./Components/Navigation-without-routing";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Learn React</p>
          <Component1 />
          <Navigation1 />
          {/* <Contact /> */}
        </header>
      </div>
    </>
  );
}

export default App;
