import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./components/Navbar.js"; 

function App() {
  return(
    <div>

      <Navbar/>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById("root"))

