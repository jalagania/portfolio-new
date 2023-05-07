import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import "./Footer.css";

function Footer() {
  const formRef = useRef();
  const [notification, setNotification] = useState({ name: "", text: "" });
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Invalid name")
      .min(2, "Too short")
      .required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    message: yup.string().min(2, "Too short").max(500, "Too long").required("Required"),
  });

  const { errors, values, touched, handleBlur, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: formSchema,
      onSubmit,
    });

  function onSubmit(values, actions) {
    emailjs
      .sendForm("service_pz7wz3a", "template_yzf4vaw", formRef.current, "fKqB4QRxcolYhM4qR")
      .then(
        // eslint-disable-next-line no-unused-vars
        (result) => {
          setNotification({ name: "success", text: "Message has been sent" });
          actions.resetForm();
        },
        // eslint-disable-next-line no-unused-vars
        (error) => {
          setNotification({ name: "error", text: "Couldn't send message. Try again later" });
          actions.setSubmitting(false);
        }
      );
  }

  useEffect(() => {
    if (notification.name) {
      setTimeout(() => {
        setNotification({ name: "", text: "" });
      }, 3000);
    }
  }, [notification]);

  return (
    <footer id="contact" className="footer">
      <div className="section-container">
        <h3 className="section-heading">Contact</h3>
        <div className="footer-form-container">
          <h4>Get in touch!</h4>
          {notification.name && (
            <h5
              className={`footer-form__notification ${
                notification.name === "error" ? "error" : ""
              }`}
            >
              {notification.text}
            </h5>
          )}
          <form ref={formRef} className="footer-form" onSubmit={handleSubmit}>
            <label className="footer-form__name-label">
              <span className="label-name">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className={`footer-form__input ${errors.name && touched.name ? "error" : ""}`}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && <span className="error-message">{errors.name}</span>}
            </label>
            <label className="footer-form__email-label">
              <span className="label-name">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className={`footer-form__input ${errors.email && touched.email ? "error" : ""}`}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </label>
            <label className="message-label">
              <span className="label-name">Message</span>
              <textarea
                name="message"
                placeholder="Write your message here"
                className={`footer-form__textarea ${
                  errors.message && touched.message ? "error" : ""
                }`}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              {errors.message && touched.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </label>
            <button disabled={isSubmitting} type="submit" className="footer-form__btn-submit">
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
      <p className="footer__copyright">&copy; 2023 Beka Jalagania</p>
    </footer>
  );
}

export default Footer;
