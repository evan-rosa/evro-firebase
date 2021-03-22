import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Router from 'next/router';


//Original Contact Form on Contact Page
function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        name: '',
        email: '',
        message: '',
      })
    } 
  }
/*   const resetForm = () => {
    setState({
        name: '',
        email: '',
        message: '',
        subject: '',
        sent: false,
        buttonText: 'Submit',
        err: ''
    });
  }; */
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xoqyajnl',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
        //resetForm();
        Router.push('/thank-you')
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <main>
      <form onSubmit={handleOnSubmit}>
        <Form.Group className="pb-3">
            <Form.Control required id="name" type='text' placeholder='Name' name="name" value={inputs.name} onChange={handleOnChange} />
        </Form.Group>

        <Form.Group className="pb-3">
            <Form.Control required id="email" type="email" placeholder='Email' name="_replyto" value={inputs.email} onChange={handleOnChange} />
        </Form.Group>

        <Form.Group className="pb-3">
          <Form.Control required id="message" type='rich-text' placeholder='Message' name="message" value={inputs.message} onChange={handleOnChange} />
        </Form.Group>



        <Button type="submit" disabled={status.submitting} data-gtm-button='contact form'         className='evro-navy-btn pt-2 pb-2 pl-4 pr-4'>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </Button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  )

}

export default ContactForm;