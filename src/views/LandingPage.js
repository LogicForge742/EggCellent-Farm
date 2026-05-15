import { Header } from '../components/Header.js';

export const LandingPage = () => `
  ${Header('home')}

  <section class="hero" id="home">
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <h1>Premium Poultry, <span class="text-accent">Freshly Delivered.</span></h1>
      <p>Sustainable farming practices meeting modern enterprise standards. From our farm to your table, with care in every egg.</p>
      <div class="hero-actions">
        <a href="/products" class="btn btn-primary btn-lg" data-link>Shop Products</a>
        <a href="/dashboard" class="btn btn-white btn-lg" data-link>Manage Farm</a>
      </div>
    </div>
  </section>

  <section class="about" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-image">
          <img src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/55936032-e2f4-4ae5-802f-abfaff6be5a0.png" alt="Our Sustainable Farm">
          <div class="experience-badge">
            <span class="years">10+</span>
            <span class="text">Years of Excellence</span>
          </div>
        </div>
        <div class="about-text">
          <span class="sub-title">Our Heritage</span>
          <h2>A Legacy of Sustainable <span class="text-primary">Poultry Excellence</span></h2>
          <p>Founded on the principles of animal welfare and environmental stewardship, Eggcellent has grown from a local family farm into a regional leader in high-quality poultry products.</p>
          <div class="features-list">
            <div class="feature-item">
              <span class="icon">✓</span>
              <div>
                <h4>Ethical Farming</h4>
                <p>100% free-range and pasture-raised hens.</p>
              </div>
            </div>
            <div class="feature-item">
              <span class="icon">✓</span>
              <div>
                <h4>Organic Standards</h4>
                <p>Certified organic feed and zero-chemical policy.</p>
              </div>
            </div>
          </div>
          <a href="/login" class="btn btn-outline" data-link>Learn More About Us</a>
        </div>
      </div>
    </div>
  </section>

  <section class="features container" id="services">
    <div class="section-header">
      <h2>Our Services</h2>
      <p>Comprehensive poultry solutions for modern agriculture.</p>
    </div>
    <div class="features-grid">
      <div class="feature-card card">
        <div class="icon-circle icon-poultry">🐔</div>
        <h3>Poultry Farming</h3>
        <p>Free-range chickens raised with care and attention to animal welfare standards.</p>
      </div>
      <div class="feature-card card">
        <div class="icon-circle icon-eggs">🥚</div>
        <h3>Fresh Eggs</h3>
        <p>Daily fresh eggs collected from our healthy, happy hens.</p>
      </div>
      <div class="feature-card card">
        <div class="icon-circle icon-delivery">🚚</div>
        <h3>Farm Delivery</h3>
        <p>Fresh products delivered directly from our farm to your doorstep.</p>
      </div>
      <div class="feature-card card">
        <div class="icon-circle icon-organic">🌱</div>
        <h3>Organic Products</h3>
        <p>Certified organic poultry products grown without harmful chemicals.</p>
      </div>
    </div>
  </section>

  <footer class="main-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a href="/" class="logo logo-white" data-link>🐔 Eggcellent</a>
        <p>Providing premium poultry and farm-fresh products since 2015. Committed to sustainable farming and ethical standards.</p>
        <div class="social-links">
          <a href="#" class="social-icon">f</a>
          <a href="#" class="social-icon">t</a>
          <a href="#" class="social-icon">i</a>
          <a href="#" class="social-icon">l</a>
        </div>
      </div>
      
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/" data-link>Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="/products" data-link>Our Products</a></li>
          <li><a href="#services">Farm Services</a></li>
          <li><a href="/dashboard" data-link>Farmer Dashboard</a></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h4>Contact Us</h4>
        <ul>
          <li>📍 456 Riverside Drive, Kapkwen, Bomet, Kenya</li>
          <li>📞 +254 713 156 139</li>
          <li>✉️ info@eggcellent.com</li>
          <li>🕒 Mon - Sat: 7am - 6pm</li>
        </ul>
      </div>

      <div class="footer-newsletter">
        <h4>Newsletter</h4>
        <p>Subscribe to get updates on fresh batches and seasonal offers.</p>
        <form class="newsletter-form">
          <input type="email" placeholder="Your email address">
          <button type="submit" class="btn btn-primary">Join</button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2026 Eggcellent Poultry Systems. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </div>
    </div>
  </footer>
`;
