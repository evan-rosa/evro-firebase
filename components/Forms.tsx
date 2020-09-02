import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Router from 'next/router';

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Card border='light' className='shadow bg-white'>
      <Card.Header>Have A Question?</Card.Header>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control required type='text' placeholder='Name' />
          </Form.Group>
          <Form.Group>
            <Form.Control required type='text' placeholder='Email' />
          </Form.Group>
          <Form.Group>
            <Form.Control required type='text' placeholder='Subject' />
          </Form.Group>
          <Form.Group>
            <Form.Control required type='rich-text' placeholder='Message' />
          </Form.Group>
        </Form>
        <Button
          className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'
          onClick={() => Router.push('/thank-you')}
        >
          Send
        </Button>{' '}
      </Card.Body>
    </Card>
  );
}

export default ContactForm;
