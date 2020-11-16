import { NextSeo } from 'next-seo';

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
      <NextSeo 
        title="Evan Rosa | Analytics Engineer and Data Science Enthusiast"
        description="Evan Rosa, an engineer improving the digital experience and ROI through data"
        canonical='https://evan-rosa.com'
      />
      <div className='height-inherit-vh parent-wrapper'>
        <div className='content p-5'>
          <Container>
            <Row className='bring-to-front'>
              <Col md='6'>
                <Row>
                  <Col>
                    <h1 className="h2 remove-bold">Improving the <span className="evro-red-font"><strong>digital experience</strong></span> and <span className="evro-red-font"><strong>ROI</strong></span> through data.</h1>
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
                          <h2 className="h6 remove-margin pt-2 pb-2"><strong>Learn More About Evan Rosa</strong></h2>
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
