import "./styles.css";
import React, { useState } from "react";
import ReactDom from "react-dom";

export default function App() {
  const [item, setItem] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
