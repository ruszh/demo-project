import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer/Customer";
import axios from "axios";
import AddCustomer from './components/AddCustomer/AddCustomer';
// import Menu from "./components/Menu/Menu";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customersList: []
    };
  }

  componentWillMount() {
    axios
      .get("https://thawing-fortress-57364.herokuapp.com/api/customers")
      .then(res => {
        this.setState({
          customersList: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const customers = this.state.customersList;
    return (
      <div className="App">      
        <div className="container">                     
            <h1>Customers</h1>
            <AddCustomer />
            <table className="table table-hover col-10">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Surname</th>
                  <th scope="col">Phone</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {customers.map(customer => (
                  <Customer customer={customer} key={customer.id} />
                ))}
              </tbody>
            </table>
          </div>        
      </div>
    );
  }
}

export default App;
