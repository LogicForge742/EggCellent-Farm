import { Header } from '../components/Header.js';

export const ContactPage = () => `
  ${Header('contact')}

  <main class="contact-page container">
    <section class="contact-hero">
      <h1>Get In Touch</h1>
      <p>Have questions about our products or services? We'd love to hear from you.</p>
    </section>

    <div class="contact-grid">
      <div class="contact-info-panel card">
        <h3>Contact Information</h3>
        <p>Our team is here to help you with any inquiries regarding our poultry farm.</p>
        
        <div class="info-list">
          <div class="info-item">
            <span class="icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>456 Riverside Drive, Kapkwen, Bomet, Kenya</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">📞</span>
            <div>
              <h4>Phone</h4>
              <p>+254 713 156 139</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">✉️</span>
            <div>
              <h4>Email</h4>
              <p>info@eggcellent.com</p>
            </div>
          </div>
        </div>

        <div class="office-hours">
          <h4>Office Hours</h4>
          <p>Monday - Saturday: 7:00 AM - 6:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div class="contact-form-panel card">
        <form id="contact-form" class="auth-form">
          <div class="form-row">
            <div class="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" required>
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required>
            </div>
          </div>
          <div class="form-group">
            <label>Subject</label>
            <input type="text" placeholder="How can we help?" required>
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea placeholder="Write your message here..." rows="6" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Send Message</button>
        </form>
      </div>
    </div>
  </main>

  <footer class="main-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a href="/" class="logo logo-white" data-link>🐔 Eggcellent</a>
        <p>Providing premium poultry and farm-fresh products since 2015. Committed to sustainable farming and ethical standards.</p>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Eggcellent Poultry Systems. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;

ContactPage.init = () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! We will get back to you shortly.');
      form.reset();
    });
  }
};
