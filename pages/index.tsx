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
          Web Marketer, Analyst, Engineer, & Data Science Pro | EvRo.io
        </title>
        <link
          rel='canonical'
          href='https://www.evro.io/'
          data-react-helmet='true'
        ></link>
        <meta
          name='description'
          content='Evro.io is the digital web portfolio for Evan Rosa. Full-stack developer, digital marketer &amp; analyst, and data science professional.'
          data-react-helmet='true'
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
                      Experienced web developer, web marketer & analyst, and
                      data scientist. Building complex web applications while
                      using data to improve user experience.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Link href='about'>
                      <a data-gtm-nav-header='about'>
                        <Button className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'>
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
