import React, { useState } from "react";
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
  DropdownItem
} from "reactstrap"
import { projects } from "../ProjectInfo";

const Header = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <>
     <Navbar className="navbar-back" color="light" light expand="md">
          <NavbarBrand className="navbar-title" href="/"><img src="/G.png" width="120" height="120" alt="" style={{marginBottom:"0px"}}/></NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={collapsed} navbar>
            <Nav className="ms-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    My Work
                  </DropdownToggle>
                  <DropdownMenu className="collapse-navbar-collapse" end>
                  {projects.map(project => 
                    <DropdownItem className="topnav-right">
                      <a href={project.link}>{project.name}</a>
                    </DropdownItem>
                    )}
                  </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <a href="/aboutme" className="nav-link">
                  About Me
                </a>
              </NavItem>

              <NavItem>
                <a href="/contact" className="nav-link">
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
            
