import Head from 'next/head';

import Link from 'next/link';
import Sky from '../public/dc-skyline.svg';

import '../styles/Home.module.css';

import MainLayout from '../components/MainLayout';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../components/Forms';

const Home = () => {
  return (
    <MainLayout>
      <Head>
        <title>
          Evan Rosa | Digital Marketer & Analyst, Engineer, and Data Science
          Enthusiast
        </title>
        <link rel='canonical' href='https://www.evro.io/'></link>
        <meta
          name='description'
          content='Evan Rosa | Digital Marketer & Analyst, Engineer, and Data Science Enthusiast.'
        ></meta>
      </Head>
      <div className='height-inherit-vh parent-wrapper'>
        <div className='content p-5'>
          <Container>
            <Row className='bring-to-front'>
              <Col md='6'>
                <Row>
                  <Col>
                    <h1>
                      Hi, I'm Evan Rosa |{' '}
                      <span className='evro-red-font'>EvRo</span>
                    </h1>
                    <p className='lead'>
                      I'm an experienced web developer, web marketer & analyst,
                      and data science enthusiast. I basically enjoy building
                      web applications but I use data to improve user
                      experience.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Link href='about'>
                      <a>
                        <Button
                          className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'
                          data-gtm-button='Learn More About Evan Rosa'
                        >
                          Learn More About Evan Rosa
                        </Button>{' '}
                      </a>
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col md='6'>
                <ContactForm />
              </Col>
            </Row>
          </Container>
        </div>

        <div className='child-wrapper'>
          <img className='home-hero' src={Sky} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
