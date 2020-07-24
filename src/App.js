import React from 'react';
import itachi from "./itachi.jpeg"
import './App.css';
import './style.css'

function App() {
  return (
<div className="App">
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

       <h1 className="title red">Your name here</h1>

      <br/>

      <img src={itachi} width="320" height="240"/>

      <br />

      <img src="/sasuke.jpeg" width="320" height="240" />

    </div>

      <video width="320" height="240" controls>

        <source src="/bird.mp4" type="video/mp4" />

      </video>
</div>
  );
}

export default App;
