import Link from 'next/link';
import Sky from '../public/dc-skyline.svg';

import '../styles/Home.module.css';

import MainLayout from '../components/MainLayout';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = (props) => {
  return (
    <MainLayout>
      <div className='height-inherit-vh parent-wrapper'>
        <div className='content p-5'>
          <Container>
            <Row>
              <Col className='mobile-pad'>
                <h1>Thank You!</h1>
                <p className='lead'>
                  I appreciate you taking the time to send me an email. I will
                  reply to your message shortly. In the meantime, please feel
                  free to learn more about me and my skill-set.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className='mobile-pad'>
                <Link href='/about'>
                  <a data-internal='internal-learn-about-evan'>
                    <Button className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'>
                      Learn More About Evan Rosa
                    </Button>
                  </a>
                </Link>
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
