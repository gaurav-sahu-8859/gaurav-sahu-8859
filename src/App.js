import './App.css';
import React from 'react';
import Nav from "./Components/Nav";
import Person from "./Components/Nav2";
import Content1 from "./Components/Content1";
import Content2 from "./Components/Content2";
import Footer from "./Components/Footer";

function App() {
  return (

    //jsx -> js + html
    <div className="App">
      <Nav/>
      <Person/>
      <Content1/>
      <Content2/>
      <Footer/>
    </div>
  );
}

export default App;
