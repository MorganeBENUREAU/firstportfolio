import { useState } from 'react';
import emailjs from 'emailjs-com';
import emailjsConf from './env';

import './style.scss';


const Contact = () => {

  const [message, setMessage] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm(emailjsConf.EMAILJS_SERVICE, emailjsConf.EMAILJS_TEMPLATE, event.target, emailjsConf.EMAILJS_USER)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            setMessage(true);
        }, function (error) {
            console.log('FAILED...', error);
        });
  };

  return (
    
    <div className="contact">
      <h2>Formulaire de contact</h2>
        {message ? <p className="contact__confirmed-message">Votre message a bien été envoyé.</p> :
          <form method="post" id="contactForm" name="contactForm" onSubmit={sendEmail}>

            <div className="contact__first">
                <input type="text" name="firstname" id="firstname" placeholder="Votre prénom" required />
                <input type="text" name="lastname" id="lastname" placeholder="Votre nom" required />
                <input type="email" name="email" id="email" placeholder="Votre email" required />
            </div>

            <div className="contact__second">
                <textarea name="message" id="message"  placeholder="Votre message" required></textarea>
            </div>

            <input type="submit" value="Envoyer" className="contact__submit" />
          </form>
        }
    </div>
  )

};


export default Contact;