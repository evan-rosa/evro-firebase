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
        <Container className='p-5'>
          <Row className='pb-3'>
            <Col>
              <h1>Evan Rosa's Project Portfolio</h1>
              <p className='lead'>
                Here are just a few featured projects I’ve worked on outside of
                federal government consulting.
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
                        <Card.Img variant='top' src={projects.image} />
                        <Card.Body className='text-center'>
                          <Card.Title>{projects.title}</Card.Title>
                          <Card.Text>{projects.headline}</Card.Text>

                          <Link
                            href='/projects/[id]'
                            as={`/projects/${projects.id}`}
                          >
                            <a data-internal='internal-project-button-click'>
                              <Button className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'>
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
