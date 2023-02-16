import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Save to reload. </p>
//         <a
//           className="link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  const [hasError, setHasError] = useState(false);

  function handleOnError(error, errorInfo) {
    console.error(error, errorInfo);
    setHasError(true);
  }

  return (
    <div>
      {hasError ? <ErrorFallback /> : <MyComponent onError={handleOnError} />}
    </div>
  );
}

export default App;

function ErrorFallback() {
  return (
    <div>
      <h2>Something went wrong.</h2>
      <p>Please refresh the page or try again later.</p>
    </div>
  );
}

function MyComponent(props) {
  function handleClick() {
    try {
      // code that may throw an error
      throw new Error("Error occurred.");
    } catch (error) {
      props.onError(error, { componentStack: "MyComponent" });
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Throw Error</button>
    </div>
  );
}
