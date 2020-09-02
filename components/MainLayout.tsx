import React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainLayout({ children }) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='white'
        sticky='top'
        className='shadow-sm bg-white'
      >
        <Navbar.Brand>
          <Link href='/'>
            <a data-gtm-nav-header='about' className='no-underline'>
              <strong className='App-logo'>EVRO</strong>
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-end'
        >
          <Nav>
            <Nav.Link>
              <Link href='about'>
                <a
                  data-gtm-nav-header='about'
                  className='evro-navy-font no-underline'
                >
                  About
                </a>
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link href='projects'>
                <a
                  data-gtm-nav-header='projects'
                  className='evro-navy-font no-underline'
                >
                  Projects
                </a>
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link href='contact'>
                <a
                  data-gtm-nav-header='contact'
                  className='evro-navy-font no-underline'
                >
                  Contact
                </a>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid>
        <main>{children}</main>
      </Container>
    </div>
  );
}

export default MainLayout;
