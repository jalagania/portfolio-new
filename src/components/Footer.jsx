import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./Footer.css";

function Footer() {
  const formRef = useRef();
  const [notification, setNotification] = useState({ name: "", text: "" });

  function handleSubmitButton() {
    emailjs
      .sendForm("service_pz7wz3a", "template_yzf4vaw", formRef.current, "fKqB4QRxcolYhM4qR")
      .then(
        // eslint-disable-next-line no-unused-vars
        (result) => {
          setNotification({ name: "success", text: "Message has been sent" });
        },
        // eslint-disable-next-line no-unused-vars
        (error) => {
          setNotification({ name: "error", text: "Couldn't send message. Try again" });
        }
      );
  }

  return (
    <footer id="contact" className="footer">
      <div className="section-container">
        <h3 className="section-heading">Contact</h3>
        <div className="footer-form-container">
          <h4>Get in touch!</h4>
          <h5 className="footer-form__notification">{notification.text}</h5>
          <form ref={formRef} className="footer-form" onSubmit={(event) => event.preventDefault()}>
            <input type="text" name="name" placeholder="Name" className="footer-form__input" />
            <input type="email" name="email" placeholder="Email" className="footer-form__input" />
            <textarea
              name="message"
              placeholder="Write your message here"
              className="footer-form__textarea"
            ></textarea>
            <button type="submit" className="footer-form__btn-submit" onClick={handleSubmitButton}>
              Send
            </button>
          </form>
        </div>
      </div>
      <p className="footer__copyright">&copy; 2023 Beka Jalagania</p>
    </footer>
  );
}

export default Footer;
