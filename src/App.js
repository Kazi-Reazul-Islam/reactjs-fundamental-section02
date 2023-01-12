import React from "react";
import ReactHtmlParser from "react-html-parser";

function App() {
  let htmlString = "<h1>Hello</h1>";
  return <div>{ReactHtmlParser(htmlString)}</div>;
}

export default App;
