// import { useContext, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
// import AppContext from '../context/AppContext';

import '../styles/Header.css';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Header = () => {
  const { setEditMode } = useContext(AppContext);

  const active = {
    borderBottom: '2px solid red',
    backgroundColor: '#eee',
    padding: 'auto 20px',
  };
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Brand>
          <NavLink to='/' className='nav-title-style'>
            Contact App
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='navbarScroll' />

        <Navbar.Collapse id='navbarNav'>
          <Nav
            className='my-2 my-lg-0 ms-auto align-items-center'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink
              to='add'
              className='p-3 nav-link-style'
              style={({ isActive }) => (isActive ? active : undefined)}
              onClick={() => setEditMode(false)}
            >
              Add Contact
            </NavLink>
            <NavLink
              to='about'
              className='p-3 nav-link-style'
              style={({ isActive }) => (isActive ? active : undefined)}
            >
              About
            </NavLink>
            <div className='d-flex align-items-center'>
              <input
                type='search'
                placeholder='Search'
                className='mx-2 nav-input-style'
                aria-label='Search'
                // value={query}
                // onChange={onSearchbarChange}
              />
              <BsSearch />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
