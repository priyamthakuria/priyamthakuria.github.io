import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-content-wrapper">
        <div className="contact-header">
          <h1 className="page-title">Contact</h1>
        </div>
        <div className="contact-content">
          <p className="contact-description">
            Feel free to reach out to me through the following channels:
          </p>
          <div className="contact-info">
            <a href="mailto:your.email@example.com" className="contact-link">Email</a>
            <a href="https://linkedin.com/in/yourprofile" className="contact-link">LinkedIn</a>
            <a href="https://github.com/yourusername" className="contact-link">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;