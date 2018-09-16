import React, { Component } from "react";
import "./Menu.css";
import styled from "styled-components";
import SideNav, { NavItem, NavText, NavIcon } from "@trendmicro/react-sidenav";
import { NavLink } from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const StyledSideNav = styled(SideNav)`
  background: #007bff;
  margin-right: 64px;
  position: fixed;
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "customers"
    };
  }
  

  render() {
    const { toggle } = this.props;
    return (
      <StyledSideNav
        onSelect={selected => {
          this.setState({
            selected: selected
          });
          
        }}
        onToggle={toggle}
      >
        <SideNav.Toggle />
        <SideNav.Nav>
          <NavItem eventKey="customers">
            <NavIcon>
              <i
                className="fa fa-fw fa-home"
                style={{ fontSize: "1.75em", verticalAlign: "middle" }}
              />
            </NavIcon>
            <NavText title="customers">
              <NavLink to="/">Customers</NavLink>
            </NavText>
          </NavItem>
        </SideNav.Nav>
        <SideNav.Nav>          
          <NavItem eventKey="services">
            <NavIcon>
              <i
                className="fa fa-fw fa-home"
                style={{ fontSize: "1.75em", verticalAlign: "middle" }}
              />
            </NavIcon>
            <NavText title="services">
              <NavLink to="/services">Services</NavLink>
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </StyledSideNav>
    );
  }
}

export default Menu;
