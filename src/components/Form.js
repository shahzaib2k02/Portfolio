import './Form.css'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';

const Form = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg }
      });
      setInputs({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg }
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      await emailjs.sendForm(
        'service_mh5sf7z',       // Your service ID
        'template_lll3d2p',      // Your template ID
        form.current,
        '2er-eX87kRbsFVog6'     // Your public key
      );
      handleServerResponse(true, 'Thank you for your message! I will get back to you soon.');
    } catch (error) {
      handleServerResponse(false, error.message);
    }
  };

  const handleChange = e => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className='form-container'>
      <h2>Get In Touch</h2>
      <p className='form-subtitle'>Have a question or want to work together?</p>
      <form ref={form} onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            required
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            required
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='subject'
            placeholder='Subject'
            required
            value={inputs.subject}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='message'
            rows='6'
            placeholder='Your Message'
            required
            value={inputs.message}
            onChange={handleChange}
          />
        </div>
        <button 
          className='btn submit-btn' 
          type='submit'
          disabled={status.submitting}
        >
          {!status.submitting ? (
            <>
              Send Message <FaPaperPlane />
            </>
          ) : (
            'Sending...'
          )}
        </button>
      </form>
      {status.info.error && (
        <div className='error-message'>
          Error: {status.info.msg}
        </div>
      )}
      {!status.info.error && status.info.msg && (
        <div className='success-message'>
          {status.info.msg}
        </div>
      )}
    </div>
  )
}

export default Form