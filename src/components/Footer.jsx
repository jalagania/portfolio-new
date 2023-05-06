import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="section-container">
        <h3 className="section-heading">Contact</h3>
        <div className="form-container">
          <h4>Get in touch!</h4>
          <form className="footer__form" onSubmit={(event) => event.preventDefault()}>
            <input type="text" name="name" placeholder="Name" className="footer__form--input" />
            <input type="email" name="email" placeholder="Email" className="footer__form--input" />
            <textarea
              name="message"
              placeholder="Write your message here"
              className="footer__form--textarea"
            ></textarea>
            <button type="submit" className="footer__form--btn-submit">
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
