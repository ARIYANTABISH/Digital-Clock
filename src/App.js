import React, { useState } from "react";
import "./App.css";

function App() {
  let time = new Date().toLocaleTimeString();
  const [Ctime, setCtime] = useState(time);

  let date = new Date().toLocaleDateString();
  const [Cdate, setCdate] = useState(date);

  const upDateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
    date = new Date().toLocaleDateString();
    setCdate(date);
  };
  setInterval(upDateTime, 1000);
  return (
    <div className="App">

      <h1>{Ctime}</h1>
      <h1>{Cdate}</h1>
      
    </div>
  );
}

export default App;
