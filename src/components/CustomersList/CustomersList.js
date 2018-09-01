import React, { Component } from "react";
import Customer from "../Customer/Customer";
import AddCustomer from "../AddCustomer/AddCustomer";
import Search from '../Search/Search';
import config from '../../config';
// import Menu from "./components/Menu/Menu";


class CustomersList extends Component {
  
  // searchHandler = (query) => {
  //   if(!query) {
  //     this.getCustomers();
  //     return;
  //   }
  //   axios.get(URL + query)
  //       .then(res => {
  //         this.setState({
  //           customersList: res.data
  //         })
  //       })
  // }
  

  componentWillMount = () => {
    this.props.getCustomers();
  }

  render() {
    const { customersList, search } = this.props;
    return (
      <div className="container">
        <h1>Customers</h1>
        <AddCustomer />        
        <Search onSearch={search}/>
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
            {customersList.map(customer => (
              <Customer customer={customer} key={customer.id} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CustomersList;
