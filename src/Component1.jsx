import React, { useState } from "react";

function Component1() {
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

export default Component1;

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
