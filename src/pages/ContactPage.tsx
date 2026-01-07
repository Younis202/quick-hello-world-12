export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to help. Reach out to us anytime.</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <h3>Email</h3>
            <p>support@livelarq.com</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>1-800-LARQ-WATER</p>
          </div>
          <div className="info-item">
            <h3>Hours</h3>
            <p>Monday - Friday: 9am - 5pm PST</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
