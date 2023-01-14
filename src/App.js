import React from "react";
import Cleave from 'cleave.js/react';

function App() {
  return (
    <div>
      <Cleave options={{date: true,
          delimiter: '-',
          datePattern: ['Y', 'm', 'd']}} />
    </div>
  );
}

export default App;
