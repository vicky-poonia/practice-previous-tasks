import "./App.css";
import Component1 from "./Component1";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Save to reload. </p>
          <a
            className="link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Component1 />
        </header>
      </div>
    </>
  );
}

export default App;
