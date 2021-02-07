import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Router from 'next/router';

//Original Contact Form on Contact Page
function ContactForm() {
  const [state, setState] = useState({name: '', email: '', subject: '', message:'', sent: false, buttonText: 'Submit', err: ''} );


 const handleChange = (e) => {
  const {name, value} = e.target
      setState({
          ...state,
          [name]: value
  })
};

const resetForm = () => {
  setState({
      name: '',
      email: '',
      message: '',
      subject: '',
      sent: false,
      buttonText: 'Submit',
      err: ''
  });
};

const formSubmit = (e) => {
  e.preventDefault();

  setState({
      ...state,
      buttonText: 'Sending...'
  })

  axios.post('/api/sendEmail', state)
  .then(res => {
      if(res.data.result !=='success') {
          setState({
              ...state,
              buttonText: 'Failed to send',
              sent: false,
              err: 'fail'
          })
          setTimeout(() => {
              resetForm()
          }, 6000)        
      } else {
          setState({
              ...state,
              sent: true,
              buttonText: 'Sent',
              err: 'success'
          })
          setTimeout(() => {
              resetForm();
              Router.push('/thank-you')
          }, 6000)
      }
  }).catch( (err) => {
      setState({
          ...state,
          buttonText: 'Failed to send',
          err: 'fail'
      })
  })
};

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Control required type='text' placeholder='Name' name="name" value={state.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Control required type='text' placeholder='Email' name="email" value={state.email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Control required type='text' placeholder='Subject' name="subject" value={state.subject} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Control required type='rich-text' placeholder='Message' name="message" value={state.message} onChange={handleChange} />
        </Form.Group>
      </Form>
      <Button
        data-gtm-button='contact form'
        className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'
        onClick={formSubmit}
      >
        {state.buttonText}
      </Button>{' '}
    </div>
  );
}

export default ContactForm;