import React, { Component } from "react";
import "./Menu.css";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Menu extends Component {
  render() {
    return (
      <SideNav
        onSelect={selected => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>          
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default Menu;