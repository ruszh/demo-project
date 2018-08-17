import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer/Customer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customersList: []
    };
  }

  componentWillMount() {
    fetch("http://localhost:8000/")
      .then(res => res.json())
      .then(res => {
        this.setState({
          customersList: res
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  render() {
    const customers = this.state.customersList;
    return (
      <div className="App container">
        <h1>Customers</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>            
            {customers.map(customer => (
              <Customer customer={customer} key={customer.id}/>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
