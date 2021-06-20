import { NextSeo } from 'next-seo';

import Link from 'next/link';
import Sky from '../public/dc-skyline.svg';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('../components/Forms'), {
  loading: () => <p>Loading...</p>
});
const MainLayout = dynamic(() => import('../components/MainLayout'), {
  loading: () => <p>Loading...</p>
});

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
                  <Col md='12'>
                    <h2 className="h2">Enhancing the <span className="evro-red-font">digital experience</span> and <span className="evro-red-font">improving ROI</span> through data.</h2>
                    <p className='lead'>Google Analytics expert that can help you maximize your Digital Marketing and Analytics efforts.</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Link href='about'>
                      <a>
                        <Button
                          className='evro-navy-btn pt-2 pb-2 pl-4 pr-4 mb-4'
                          data-gtm-button='Learn More About Evan Rosa'
                        >
                          <p className="remove-margin pt-1 pb-1"><strong>Learn More About Evan Rosa</strong></p>
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
          <img alt='Washington DC' className='home-hero' src={Sky} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
