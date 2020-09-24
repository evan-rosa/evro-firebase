import Head from 'next/head';
import { useState, useEffect } from 'react';
import fire from '../../config/fire-conf';
import Layout from '../../components/MainLayout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Footer from '../../components/Footer';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const Home = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fire
      .firestore()
      .collection('projects')
      .onSnapshot((snap) => {
        const projects = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projects);
      });
  }, []);
  return (
    <div>
      <Layout>
        <Head>
          <title>Evan Rosa | Digital Project Portfolio</title>
          <link rel='canonical' href='https://www.evro.io/projects'></link>
          <meta
            name='description'
            content='Want to know what Evan Rosa has been working on? Check out his digital project portfolio.'
          ></meta>
        </Head>
        <Container className='p-5'>
          <Row className='pb-3'>
            <Col>
              <h1>Evan Rosa's Digital Project Portfolio</h1>
              <p className='lead'>
                If you're interested in knowing what I've been working on
                outside of my day job. Take a look at some of these projects
                I've worked on with more to come.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <CardDeck>
                <Row>
                  {projects.map((projects) => (
                    <Col key={projects.id}>
                      <Card>
                        <Link
                          href='/projects/[id]'
                          as={`/projects/${projects.id}`}
                        >
                          <a>
                            <Card.Img variant='top' src={projects.image} />
                          </a>
                        </Link>

                        <Card.Body className='text-center'>
                          <Card.Title>{projects.title}</Card.Title>
                          <Card.Text>{projects.headline}</Card.Text>

                          <Link
                            href='/projects/[id]'
                            as={`/projects/${projects.id}`}
                          >
                            <a>
                              <Button
                                data-gtm-button='project details'
                                className='evro-navy-btn btn-evro-navy-outline pt-2 pb-2 pl-4 pr-4'
                              >
                                View Project Details
                              </Button>{' '}
                            </a>
                          </Link>
                        </Card.Body>
                        <Card.Footer>
                          <small className='text-muted'>
                            Last updated 3 mins ago
                          </small>
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </Layout>
      <Footer />
    </div>
  );
};
export default Home;
