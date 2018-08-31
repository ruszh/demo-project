import React, { Component } from "react";
import { connect } from "react-redux";
import { getCustomers } from "./actions/CustomersListActions";
import "./App.css";
import CustomersList from "./components/CustomersList/CustomersList";
// import Menu from "./components/Menu/Menu";

class App extends Component {
  render() {
    const { getCustomersListAction, customersList } = this.props;
    return (
      <div className="App">
        <CustomersList
          customersList={customersList.customersList}
          isLoading={customersList.isLoading}
          getCustomers={getCustomersListAction}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCustomersListAction: () => dispatch(getCustomers())
  }
}

export default connect(mapDispatchToProps)(App);
