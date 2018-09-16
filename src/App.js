import React, { Component } from "react";
import { connect } from "react-redux";
import { getCustomers, searchCustomers } from "./actions/CustomersListActions";
import { getServicesList } from "./actions/ServicesListActions";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import SideNav, { NavItem, NavText, NavIcon } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

//Components
import CustomersList from "./components/CustomersList/CustomersList";
import ServicesList from "./components/ServicesList/ServicesList";

class App extends Component {
  state = {
    menuExpanded: false
  };

  toggleMenu = () => {
    this.setState({
      menuExpanded: !this.state.menuExpanded
    });
  };

  render() {
    const {
      getCustomersListAction,
      customersList,
      searchCustomers,
      getServicesListAction,
      servicesList
    } = this.props;

    return (
      <Router>
        <div className="app">
          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <SideNav
                  style={{
                    background: "#007bff",
                    position: "fixed"
                  }}
                  onSelect={selected => {
                    const to = "/" + selected;
                    if (location.pathname !== to) {
                      history.push(to);
                    }
                  }}
                  onToggle={this.toggleMenu}
                >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="">
                    <NavItem eventKey="">
                      <NavIcon>
                        <i className="material-icons">group</i>
                      </NavIcon>
                      <NavText>Customers</NavText>
                    </NavItem>
                    <NavItem eventKey="services">
                      <NavIcon>
                        <i className="material-icons">local_atm</i>
                      </NavIcon>
                      <NavText>Services</NavText>
                    </NavItem>
                  </SideNav.Nav>
                </SideNav>
                <main
                  className="main-wrapper"
                  style={{
                    marginLeft: this.state.menuExpanded ? 240 : 64
                  }}
                >
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <CustomersList
                        customersList={customersList.customersList}
                        isLoading={customersList.isLoading}
                        getCustomers={getCustomersListAction}
                        search={searchCustomers}
                      />
                    )}
                  />
                  <Route
                    path="/services"
                    render={() => (
                      <ServicesList
                        servicesList={servicesList.servicesList}
                        isLoading={servicesList.isLoading}
                        getServicesList={getServicesListAction}
                      />
                    )}
                  />
                </main>
              </React.Fragment>
            )}
          />
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
    customersList: store.customersList,
    servicesList: store.servicesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCustomersListAction: () => dispatch(getCustomers()),
    searchCustomers: query => dispatch(searchCustomers(query)),
    getServicesListAction: () => dispatch(getServicesList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
