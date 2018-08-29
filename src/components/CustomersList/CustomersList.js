import React, { Component } from "react";
import Customer from "../Customer/Customer";
import axios from "axios";
import AddCustomer from "../AddCustomer/AddCustomer";
import Search from '../Search/Search';
// import Menu from "./components/Menu/Menu";

const URL = "https://thawing-fortress-57364.herokuapp.com/api/customers";

class CustomersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customersList: []
    };
  }

  searchHandler = (query) => {
    if(!query) {
      this.getCustomers();
      return;
    }
    axios.get(URL + query)
        .then(res => {
          this.setState({
            customersList: res.data
          })
        })
  }
  getCustomers = () => {
    axios
      .get(URL)
      .then(res => {
        this.setState({
          customersList: res.data
        });
      })
      .catch(err => console.log(err));
  }

  componentWillMount() {
    this.getCustomers();
  }

  render() {
    const customers = this.state.customersList;
    return (
      <div className="container">
        <h1>Customers</h1>
        <AddCustomer />        
        <Search onSearch={this.searchHandler}/>
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
    );
  }
}

export default CustomersList;
