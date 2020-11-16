import { NextSeo, SocialProfileJsonLd } from 'next-seo';
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
        <NextSeo 
        title="About Evan Rosa, Washington DC based Analytics Engineer"
        description="About Evan Rosa, DC based Analytics Engineer with an expertise with Google Analytics, Tag Manager, and Big Query."
        canonical='https://evan-rosa.com/about'
      />
      <SocialProfileJsonLd
      type="Person"
      name="Evan Rosa"
      url="https://evan-rosa.com"
      sameAs={[
        'https://www.linkedin.com/in/evan-rosa/',
        'https://www.instagram.com/_evro/',
        'https://github.com/evan-rosa',
        'https://medium.com/@Evan_Rosa/about',
      ]}
    />
        <section>
          <Container className='p-5'>
            <Row className='pb-5'>
              <Col xs='12'>
                <h1 className='h1'>Hey, I'm Evan Rosa</h1>
                <p className='h5-responsive'>
                  I enjoy exploring the digital world and using data to improve the our experiences online. With over 10 years of professional experience using Google Analytics and Tag Manager, I’m currently a Reporting Analytics Engineer with Digital Turbine working on web and app user tracking.</p>
                <Link href='https://storage.googleapis.com/evro-backend.appspot.com/resume/kelva0n53pqcwmkygti/resume/resume-2020.pdf'>
                  <a>
                    <Button
                      className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'
                      data-gtm-button='Download Resume'
                    >
                      <strong>Download My Resume</strong>
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
                              <h3>{about.name}</h3>
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
                  <a>
                    <Button
                      className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'
                      data-gtm-button='contact'
                    >
                      Contact
                    </Button>{' '}
                  </a>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
      <Footer />
    </div>
  );
};
export default About;
