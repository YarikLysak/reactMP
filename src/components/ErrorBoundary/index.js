import React from "react";

const ErrorBoundary = (props) => {
  const isOK = true;
  return (
    <>{isOK ? props.children : <div>Oops, something went wrong...</div>}</>
  );
};

export default ErrorBoundary;
