import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer className='font-small evro-navy-back evro-white-font'>
      <Navbar collapseOnSelect expand='lg'>
        <div className='footer-copyright py-2 width-100'>
          <Container className='width-100'>
            <Row className='text-center width-100'>
              <Col>
                &copy; {new Date().getFullYear()} Copyright: EvRo.io is created
                with{' '}
                <a
                  href='https://firebase.google.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='evro-white-font no-underline'
                >
                  Firebase
                </a>
                ,{' '}
                <a
                  href='https://www.bootstrap.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='evro-white-font no-underline'
                >
                  {' '}
                  Bootstrap.com{' '}
                </a>
                ,
                <a
                  href='https://reactjs.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='evro-white-font no-underline'
                >
                  {' '}
                  ReactJS.org{' '}
                </a>
                ,
                <a
                  href='https://nextjs.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='evro-white-font no-underline'
                >
                  {' '}
                  NextJS.org{' '}
                </a>
                , and
                <a
                  href='https://www.typescriptlang.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='evro-white-font no-underline'
                >
                  {' '}
                  TypeScript{' '}
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </Navbar>
    </footer>
  );
};

export default Footer;
