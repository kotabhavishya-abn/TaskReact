import React from "react";
import Button from "./component/Button";


function App() {
  function Button1(){
    alert("Hello World")
  }
  return (
    
    <div className="App">
      <h1>hello world</h1>
      <Button style={{background: 'blue', color: 'white'}} onClick={Button1()}>hello components</Button>
    </div>
  );
}


export default App;