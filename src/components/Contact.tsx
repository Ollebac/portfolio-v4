import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

import '../scss/contact.scss';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactMessage, setContactMessage] = useState<string>('');

  const resetForm = () => {
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('my_gmail', 'contact_form', form.current!, 'wPgA4XiC3KF2B2QeA').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    alert('You have successfully submitted this form. Please check your inbox for a confirmation email.');
    resetForm();
  };

  return (
    <div className='contact_section_container' id='contact'>
      <div className='contact_form_container'>
        <div className='contact_form_left'>
          <h3 className='form_title'>Contact Me</h3>
          <div className='contact_line_break'></div>
          <p className='contact_description'>
            Whether its about my work or future opportunities, the best way to get in touch with me starts with an
            email!
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className='contact_form'>
          <div className='form_line'>
            <label className='contact_label'>Name</label>
            <input
              type='text'
              name='user_name'
              className='contact_form_input'
              placeholder='Name'
              required={true}
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
          </div>
          <div className='form_line'>
            <label className='contact_label'>Email</label>
            <input
              type='text'
              name='user_email'
              className='contact_form_input'
              placeholder='Email'
              required={true}
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </div>
          <div className='form_line'>
            <label className='contact_label'>Message</label>
            <textarea
              name='message'
              className='contact_form_input'
              placeholder='Tell me what you have to say!'
              required={true}
              rows={4}
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
            />
          </div>
          {/* <ReCAPTCHA sitekey='6LfXIElmAAAAAKXraSAzlqJBo9jfAPAl7JhKFKL3' className='recaptcha' /> */}
          <button className='form_button' type='submit' value='Send'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
