import React, { Component } from "react";
import "./App.css";
import CustomersList from './components/CustomersList/CustomersList';
// import Menu from "./components/Menu/Menu";

class App extends Component {
  
  render() {
    
    return (
      <div className="App">      
        <CustomersList />
      </div>
    );
  }
}

export default App;
