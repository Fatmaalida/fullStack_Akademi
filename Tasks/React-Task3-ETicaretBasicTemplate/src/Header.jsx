import React, { useState } from "react";
import {
  NavbarBrand,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
  Nav,
  Navbar,
} from "reactstrap";
import Cart from "./Cart";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="https://www.artstation.com/wetaworkshopdesignstudio"> Art Station Movie Poster</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://www.artstation.com/wetaworkshopdesignstudio"
              target="_blank"
            >
               Movie Poster
            </NavLink>
          </NavItem>

          <Cart cart={props.cart} removetocart={props.removetocart} />
        </Nav>
      </Collapse>
    </Navbar>
  );
}
