import React from "react";
import ReactCodeInput from "react-code-input";

function App() {
  return (
    <div>
      <ReactCodeInput onChange={(value)=>{alert(value)}} type="number" fields={6} />
    </div>
  );
}

export default App;
