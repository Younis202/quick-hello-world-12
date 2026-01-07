import { Link } from 'react-router-dom';

export default function TechnologyPage() {
  return (
    <div className="technology-page">
      <section className="tech-hero">
        <h1>PureVis™ Technology</h1>
        <p>The science behind the world's first self-cleaning water bottle.</p>
      </section>

      <section className="tech-intro">
        <div className="tech-intro-content">
          <h2>UV-C LED Purification</h2>
          <p>
            LARQ's proprietary PureVis™ technology uses UV-C LED light at 280nm wavelength 
            to neutralize up to 99.9999% of harmful bio-contaminants. This is the same technology 
            used in hospitals and water treatment facilities, now available in a portable bottle.
          </p>
        </div>
        <div className="tech-intro-image">
          <img 
            src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1716999148/Product-pages/2024-PDP-update/purevis-bottle-pdp/technology-module-purevis-desktop.png" 
            alt="UV-C LED Technology"
          />
        </div>
      </section>

      <section className="tech-features">
        <h2>How It Works</h2>
        <div className="tech-features-grid">
          <div className="tech-feature">
            <div className="tech-feature-number">1</div>
            <h3>Press the Button</h3>
            <p>Activate the UV-C LED light with a simple press of the cap button.</p>
          </div>
          <div className="tech-feature">
            <div className="tech-feature-number">2</div>
            <h3>UV-C Light Activates</h3>
            <p>The UV-C LED emits light at 280nm wavelength for 60 seconds.</p>
          </div>
          <div className="tech-feature">
            <div className="tech-feature-number">3</div>
            <h3>Purification Complete</h3>
            <p>Bio-contaminants are neutralized and your water is pure.</p>
          </div>
        </div>
      </section>

      <section className="tech-benefits">
        <h2>Benefits</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <h3>Self-Cleaning</h3>
            <p>Automatically activates every 2 hours to keep your bottle clean.</p>
          </div>
          <div className="benefit-item">
            <h3>Chemical-Free</h3>
            <p>No chlorine or other chemicals needed - just pure UV-C light.</p>
          </div>
          <div className="benefit-item">
            <h3>Long-Lasting</h3>
            <p>Battery lasts up to 1 month on a single USB charge.</p>
          </div>
          <div className="benefit-item">
            <h3>Safe & Effective</h3>
            <p>Tested and certified to eliminate 99.9999% of bio-contaminants.</p>
          </div>
        </div>
      </section>

      <section className="tech-cta">
        <h2>Experience Pure Water</h2>
        <p>Try LARQ technology for yourself.</p>
        <Link to="/products" className="btn-primary">Shop Now</Link>
      </section>
    </div>
  );
}
