import React from 'react';
import './App.css';
import Footer from './footer/footer'
import LeftSide from './left-side/left-side'
import Header from './header/header'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LeftSide></LeftSide>
      <Footer></Footer>
    </div>
  );
}

export default App;
