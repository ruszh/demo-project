import React, { Component } from "react";
import Customer from "../Customer/Customer";
import AddCustomer from "../AddCustomer/AddCustomer";
import Search from "../Search/Search";
import PropTypes from "prop-types";
import Preloader from '../Preloader/Preloader';
import TableConstructor from '../TableConstructor/TableConstructor';

class CustomersList extends Component {
  componentWillMount = () => {
    this.props.getCustomers();
  };

  render() {
    const { customersList, search, getCustomers, isLoading } = this.props;
    const CustomersTable = TableConstructor(Customer);
    const fields = ['Name', 'Surname', 'Phone', '']
    return (
      <div className="container">
        <h1>Customers</h1>
        <AddCustomer />
        <Search onSearch={search} getCustomers={getCustomers} />        
        <CustomersTable fields={fields} items={customersList} />
        {isLoading && (
          <Preloader />
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
