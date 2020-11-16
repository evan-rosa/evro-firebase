import React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Head from 'next/head';

function MainLayout({ children }) {
  return (
    <div>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='google-site-verification'
          content='vB1wqK6_bK58jLO6iJr9uhz42Trvi3ukMEZ7FaK0MGk'
        ></meta>
      </Head>
      <header role='banner'>
        <Navbar
          collapseOnSelect
          expand='lg'
          bg='white'
          sticky='top'
          className='shadow-sm bg-white'
        >
          <Navbar.Brand>
            <Link href='/'>
              <h1><a className='no-underline App-logo' data-gtm-head='logo'>
                <span className='font-weight-lighter'>Evan</span> Rosa
              </a></h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='justify-content-end'
          >
            <Nav>
              <Link href='/about'>
                <a
                  className='evro-navy-font no-underline nav-link'
                  data-gtm-head='about'
                >
                  About
                </a>
              </Link>

              <Link href='/projects'>
                <a
                  className='evro-navy-font no-underline nav-link'
                  data-gtm-head='projects'
                >
                  Projects
                </a>
              </Link>

              <Link href='/contact'>
                <a
                  className='evro-navy-font no-underline nav-link'
                  data-gtm-head='contact'
                >
                  Contact
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Container fluid>
        <main>{children}</main>
      </Container>
    </div>
  );
}

export default MainLayout;
