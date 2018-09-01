import React, { Component } from "react";
import { connect } from "react-redux";
import { getCustomers, searchCustomers } from "./actions/CustomersListActions";
import "./App.css";
import CustomersList from "./components/CustomersList/CustomersList";
import PropTypes from 'prop-types';
// import Menu from "./components/Menu/Menu";

class App extends Component {
  render() {
    const { getCustomersListAction, customersList, searchCustomers } = this.props;
    return (
      <div className="App">
        <CustomersList
          customersList={customersList.customersList}
          isLoading={customersList.isLoading}
          getCustomers={getCustomersListAction}
          search={searchCustomers}
        />
      </div>
    );
  }
}

App.propTypes = {
  getCustomersListAction: PropTypes.func.isRequired,
  customersList: PropTypes.object,
  searchCustomers: PropTypes.func.isRequired
}


const mapStateToProps = store => {
  return {
    customersList: store.customersList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCustomersListAction: () => dispatch(getCustomers()),
    searchCustomers: (query) => dispatch(searchCustomers(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
