import React, { Component } from "react";
import { connect } from "react-redux";
import { getCustomers, searchCustomers } from "./actions/CustomersListActions";
import "./App.css";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
//Components
import CustomersList from "./components/CustomersList/CustomersList";
import Services from "./components/Services/Services";
import Companies from "./components/Companies/Companies";
import Menu from "./components/Menu/Menu";

class App extends Component {
  state = {
    menuExpanded: false
  };

  toggleMenu = () => {
    this.setState({
      menuExpanded: !this.state.menuExpanded
    })
  }

  render() {
    const {
      getCustomersListAction,
      customersList,
      searchCustomers
    } = this.props;

    return (
      <Router>
        <div className="App">
          <Menu toggle={this.toggleMenu}/>
          <div className='main-wrapper' style={{
            marginLeft: this.state.menuExpanded ? 240 : 64            
          }}>
            <Route
              exact
              path="/"
              render={props => (
                <CustomersList
                  customersList={customersList.customersList}
                  isLoading={customersList.isLoading}
                  getCustomers={getCustomersListAction}
                  search={searchCustomers}
                />
              )}
            />
            <Route path="/services" render={props => <Services />} />
            <Route path="/companies" render={props => <Companies />} />
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  getCustomersListAction: PropTypes.func.isRequired,
  customersList: PropTypes.object,
  searchCustomers: PropTypes.func.isRequired
};

const mapStateToProps = store => {
  return {
    customersList: store.customersList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCustomersListAction: () => dispatch(getCustomers()),
    searchCustomers: query => dispatch(searchCustomers(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
