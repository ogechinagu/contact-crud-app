import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import '../styles/Header.css';

const Header = () => {
  const active = {
    borderBottom: '2px solid red',
    backgroundColor: 'white',
    padding: 'auto 20px',
  };
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Brand>
          <NavLink to='/' className='nav-title-style'>Contact App</NavLink>
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
