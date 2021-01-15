import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Router from 'next/router';
import { Formik } from 'formik';

function ContactForm() {


  return (
    <div>
     <Formik
       initialValues={{ name: '', email: '', message: '' }}

       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <div>
            <Form>
        <Form.Group>
          <Form.Control required type='text' placeholder='Name' name='name'/>
        </Form.Group>
        <Form.Group>
          <Form.Control required type='text' placeholder='Email' />
        </Form.Group>
        <Form.Group>
          <Form.Control required type='rich-text' placeholder='Message' />
        </Form.Group>
        <Button
        data-gtm-button='contact form'
        className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'
        type="submit" disabled={isSubmitting}
        onClick={() => Router.push('/thank-you')}
      >
        Send
      </Button>
      </Form>
      
         </div>
       )}
     </Formik>
   </div>
    /* 
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control required type='text' placeholder='Name' name='name' value={name} onChange={event => setName(event.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Control required type='text' placeholder='Email' />
        </Form.Group>
        <Form.Group>
          <Form.Control required type='rich-text' placeholder='Message' />
        </Form.Group>
      </Form>
      <Button
        data-gtm-button='contact form'
        className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'
        type="submit" disabled={isSubmitting}
        onClick={() => Router.push('/thank-you')}
      >
        Send
      </Button>{' '}
    </div> */
    
  );
}

export default ContactForm;
