import React, { Component } from "react";
import Customer from "../Customer/Customer";
import AddCustomer from "../AddCustomer/AddCustomer";
import Search from "../Search/Search";
import PropTypes from "prop-types";
// import Menu from "./components/Menu/Menu";

class CustomersList extends Component {
  componentWillMount = () => {
    this.props.getCustomers();
  };

  render() {
    const { customersList, search, getCustomers, isLoading } = this.props;
    return (
      <div className="container">
        <h1>Customers</h1>
        <AddCustomer />
        <Search onSearch={search} getCustomers={getCustomers} />
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
        {isLoading && (
          <div>
            <img
              className="preloader"
              src="https://camo.githubusercontent.com/a1a81b0529517027d364ee8432cf9a8bd309542a/687474703a2f2f692e696d6775722e636f6d2f56446449444f522e676966"
              alt="preloader"
            />
          </div>
        )}
      </div>
    );
  }
}

CustomersList.propTypes = {
  customersList: PropTypes.array.isRequired,
  search: PropTypes.func.isRequired,
  getCustomers: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default CustomersList;
