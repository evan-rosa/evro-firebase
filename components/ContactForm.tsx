import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Router from 'next/router';
//import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';

//Original Contact Form on Contact Page
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
    <div>
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
        data-gtm-button='contact form'
        className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'
        onClick={() => Router.push('/thank-you')}
      >
        Send
      </Button>{' '}
    </div>
  );
}

export default ContactForm;

//New Contact Form
/*
interface emailValues {
  name: string;
  message: string;
  email: string;
}

const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        onSubmit={(
          values: emailValues,
          { resetForm }
        ) => {
          setTimeout(() => {
            //alert(JSON.stringify(values, null, 2));

            fetch('/api/send-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name: values.name, email: values.email, message: values.message })
            });
            resetForm();
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="name">Full Name</label>
          <Field id="name" name="name" placeholder="Evan Rosa" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <label htmlFor="message">Message</label>
          <Field name="message" id="message" placeholder="message to send"></Field>


          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
*/