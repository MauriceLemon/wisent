import React from 'react';
import {
  Nav,
  Navbar,
  NavDropdown,
  Image,
  Form,
  FormControl,
} from 'react-bootstrap';
import wisentLogo from '../assets/icons/wisent-logo.svg';
import userPicture from '../assets/img/johnsnow.png';

const Header: React.FC = () => (
  <header className="header bg-white">
    <Navbar expand="sm" sticky="top" className="border-bottom border-light p-0">
      <Navbar.Brand href="/" className="header__brand border-right border-light px-4 py-3 mr-5">
        <Image
          src={wisentLogo}
          alt="Wisent Logo"
        />
        <span className="header__logo-text align-middle px-3">Wisent</span>
      </Navbar.Brand>

      <Form inline className="w-50 mr-4">
        <FormControl
          type="text"
          className="header__search border-0 w-100"
          placeholder="Search products, employees, report ..."
        />
      </Form>

      <Nav className="header__navigation border-right border-light ml-auto">
        <Nav.Item className="mr-4">
          <Nav.Link className="header__navigation__link px-0">
            <svg className="header__navigation__icon">
              <use xlinkHref="symbol-defs.svg#icon-mail" />
            </svg>
            <span className="header__navigation__badge" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="header__navigation__link px-0">
            <svg className="header__navigation__icon">
              <use xlinkHref="symbol-defs.svg#icon-bell" />
            </svg>
            <span className="header__navigation__badge" />
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Nav className="header__navigation">
        <NavDropdown
          title={(
            <>
              <Image src={userPicture} roundedCircle />
              <span className="font-weight-bold ml-3">John Snow</span>
            </>
)}
          id="nav-dropdown"
          className="header__navigation__dropdown"
        >
          <NavDropdown.Item>
            Edit Profile
          </NavDropdown.Item>
          <NavDropdown.Item>
            LogOut
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  </header>
);

export default Header;
