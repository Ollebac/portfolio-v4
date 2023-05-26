import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactSubject, setContactSubject] = useState<string>('');
  const [contactMessage, setContactMessage] = useState<string>('');

  const resetForm = () => {
    setContactName('');
    setContactEmail('');
    setContactSubject('');
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
    resetForm();
  };

  return (
    <div className='contact_section_container'>
      <div className='contact_form_container'>
        <div className='contact_form_left'>
          <h3 className='section_title'>CONTACT ME</h3>
          <span className='contact_line_break'></span>
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
            <label className='contact_label'>Message Subject</label>
            <input
              type='text'
              name='subject'
              className='contact_form_input'
              placeholder='Message Subject'
              required={true}
              value={contactSubject}
              onChange={(e) => setContactSubject(e.target.value)}
            />
          </div>
          <div className='form_line'>
            <label className='contact_label'>Message</label>
            <textarea
              name='message'
              placeholder='Tell me what you have to say!'
              required={true}
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
            />
          </div>
          <ReCAPTCHA sitekey='6LfkyzgmAAAAAJ6dLJQ8rafZwOlmqmbPnlQdvKoF' />
          <button type='submit' value='Send'>
            Submit!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;