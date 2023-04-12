import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import React, {Component} from 'react';

function App() {  
  // let data = "sudev";
  const [data, setData]= useState("sudev")

  function update(){
    // data= "dev";
    // alert(data)
    setData("dev")
  }

  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={update}>click </button>
      <br/>

      {/* direct function call */}
      {/* <button onMouseOver={()=> alert ("arrow apples")}>hover</button> */}
    </div>
  );

  class Sample extends Component{
    render(){
      return(
        <div className="Sample">
        <h1>{data}</h1>
        <button onClick={update}>click </button>
      </div>
      );
    }
  }
}

// class component


export default App;
// export default Sample;

