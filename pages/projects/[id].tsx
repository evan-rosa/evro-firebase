import Head from 'next/head';
import { useState, useEffect } from 'react';
import fire from '../../firebase/fire-conf';
import Layout from '../../components/MainLayout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../components/Footer';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const Projects = (props: any) => {
  return (
    <div>
      <Layout>
        <Container className='p-5'>
          <Row className='pb-5'>
            <Col md='6'>
              <h2>{props.title}</h2>
              <p>{props.headline}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.body,
                }}
              />
              <Row className='pb-5'>
                <Col>
                  <Link href={props.url}>
                    <a>
                      <Button
                        data-gtm-button='See Project'
                        className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'
                      >
                        See Project
                      </Button>{' '}
                    </a>
                  </Link>
                </Col>
              </Row>
              <h2 className='h2-responsive font-weight-normal'>
                Site Released
              </h2>
              <p>{props.released}</p>
              <h2 className='h2-responsive font-weight-normal'>
                Technologies and Services
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.tech,
                }}
              />
            </Col>
            <Col md='6'>
              <Link href={props.url}>
                <a data-gtm-button='Project Image'>
                  <img src={props.image} alt='Project Image' />
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

export const getServerSideProps = async ({ query }) => {
  const content: any = {};
  await fire
    .firestore()
    .collection('projects')
    .doc(query.id)
    .get()
    .then((result) => {
      content['title'] = result.data().title;
      content['headline'] = result.data().headline;
      content['body'] = result.data().body;
      content['image'] = result.data().image;
      content['released'] = result.data().released;
      content['tech'] = result.data().tech;
      content['url'] = result.data().url;
    });

  return {
    props: {
      title: content.title,
      headline: content.headline,
      body: content.body,
      image: content.image,
      released: content.released,
      tech: content.tech,
      url: content.url,
    },
  };
};

export default Projects;
