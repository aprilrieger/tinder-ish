import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Cat Tinder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavLink href="/newcats">New Cats</NavLink>
          <NavLink href="/newcats">New Cats</NavLink>
          </Nav>
          <NavLink href="/newcats">New Cats</NavLink>
          <NavLink href="/newcats">New Cats</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;