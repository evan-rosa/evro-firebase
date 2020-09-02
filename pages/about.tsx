import Head from 'next/head';
import { useState, useEffect } from 'react';
import fire from '../config/fire-conf';
import Layout from '../components/MainLayout';
import Footer from '../components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const About = () => {
  const [about, setabout] = useState([]);
  useEffect(() => {
    fire
      .firestore()
      .collection('about')
      .onSnapshot((snap) => {
        const about = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setabout(about);
      });
  }, []);
  return (
    <div>
      <Layout>
        <Head>
          <title>About | Evan Rosa</title>
          <link
            rel='canonical'
            href='https://www.evro.io/about'
            data-react-helmet='true'
          ></link>
          <meta
            name='description'
            content='Evro.io is the digital web portfolio for Evan Rosa. Full-stack developer, digital marketer &amp; analyst, and data science professional.'
            data-react-helmet='true'
          ></meta>
        </Head>
        <Container className='p-5'>
          <Row className='pb-5'>
            <Col xs='12'>
              <h1 className='h1'>About Evan Rosa</h1>
              <p className='h5-responsive'>
                Hi, I'm Evan Rosa! I create digital experiences while utilizing
                marketing and data to understand the user’s journey. Based in
                the Washington D.C. area, I’m currently a Booz Allen Hamilton
                Associate, with over 10 years of professional experience,
                leading web analytic efforts for federal health web properties.
              </p>
              <Link href='https://storage.googleapis.com/evro-backend.appspot.com/resume/kelva0n53pqcwmkygti/resume/resume-2020.pdf'>
                <a data-gtm-nav-header='about'>
                  <Button className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'>
                    Download My Resume
                  </Button>{' '}
                </a>
              </Link>
            </Col>
          </Row>
          <Row className='pb-3'>
            <Col xs='12'>
              <h2>Skills and Techniques</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <CardGroup>
                <Row>
                  {about.map((about) => (
                    <Col md='6' className='pb-5' key={about.id}>
                      <Card className='shadow bg-white'>
                        <Card.Body>
                          <Card.Title className='pt-3 pb-3'>
                            {about.name}
                          </Card.Title>
                          <Card.Text>
                            <Row>
                              <Col md='6'>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: about.list_a,
                                  }}
                                />
                              </Col>
                              <Col md='6'>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: about.list_b,
                                  }}
                                />
                              </Col>
                            </Row>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </CardGroup>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md='12'>
              <h2 className='h2-responsive font-weight-normal' id='skill-edu'>
                Education, Training, and Certifications
              </h2>
            </Col>
          </Row>
          <Row className='skill-list'>
            <Col md='12'>
              <ul className='list-unstyled'>
                <li className='pb-3 pt-3'>
                  Google Analytics Individual Certification 2019
                </li>
                <li className='pb-3'>Google Ads Fundamentals 2019</li>
                <li className='pb-3'>General Assembly Data Science 2018</li>
                <li className='pb-3'>
                  General Assembly Front-End Web Development 2015
                </li>
                <li className='pb-3'>
                  Western New England University, B.S.B.A. 2006
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md='12'>
              <Link href='contact'>
                <a data-gtm-nav-header='contact'>
                  <Button className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'>
                    Contact
                  </Button>{' '}
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </Layout>
      <Footer />
    </div>
  );
};
export default About;
