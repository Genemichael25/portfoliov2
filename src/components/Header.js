import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
  <>
     <Navbar className="navbar-back" color="light" light expand="md">
      <NavbarBrand className="navbar-title" href="/">My Brand</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={!collapsed} navbar>
        <Nav className="ms-auto" navbar>
            <NavItem>
              <a href="" className="nav-link">
                About Me
              </a>
            </NavItem>
            <NavItem>
              <a href="" className="nav-link">
                Projects
              </a>
            </NavItem>
            <NavItem>
              <a href="" className="nav-link">
                Contact
              </a>
            </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
</>
  )
}

export { Header }
