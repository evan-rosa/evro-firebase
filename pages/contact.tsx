import Head from 'next/head';
import { useState, useEffect } from 'react';
import fire from '../config/fire-conf';
import Layout from '../components/MainLayout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Typed from 'react-typed';
import City from '../public/dc-map.svg';
import '../styles/Contact.module.css';

const Home = () => {
  return (
    <div>
      <Layout>
        <Container className='p-5'>
          <Row>
            <Col>
              <h1 className='pb-3'>Contact Evan Rosa</h1>
              <p className='lead'>Have A Question?</p>
              <p className='lead'>
                <Typed
                  strings={[
                    'Ask me anything',
                    'Pregúntame lo que sea',
                    'Vra my enige iets',
                    'Me pergunte qualquer coisa',
                    'اسألني اي شئ',
                    "Pregunta'm qualsevol cosa",
                    'Frag mich was',
                    'פרעגן מיר עפּעס',
                    '问我什么',
                  ]}
                  typeSpeed={80}
                  backSpeed={60}
                  loop
                />
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <span>
                  <strong>email:</strong>
                </span>{' '}
                <a
                  className='evro-navy-font contact-link'
                  href='mailto:erosa26@gmail.com'
                >
                  erosa26@gmail.com
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
      <div className='map-fit'>
        <img className='dc-map' src={City} />
      </div>
      <Container>
        <Row className='p-3 m-3'>
          <Col md='12'>
            <h2 className='pb-3'>Send Me an Email</h2>
            <ContactForm />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default Home;
