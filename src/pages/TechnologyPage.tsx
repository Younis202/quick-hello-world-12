import { Link } from 'react-router-dom';

export default function TechnologyPage() {
  return (
    <div className="technology-page">
      <div className="page-header">
        <h1>Our Technology</h1>
        <p>Award-winning UV-C LED purification technology</p>
      </div>

      <section className="tech-hero">
        <img 
          src="https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/tech-hero/tech-hero.jpg" 
          alt="LARQ Technology" 
        />
      </section>

      <section className="tech-section">
        <h2>PureVis™ Technology</h2>
        <p>
          Our patented PureVis™ technology uses UV-C LED light at a wavelength of 280nm to 
          neutralize up to 99.9999% of harmful, odor-causing bacteria and viruses in both 
          water and the bottle itself.
        </p>
        <div className="tech-features">
          <div className="feature">
            <h3>Self-Cleaning</h3>
            <p>Automatically activates every 2 hours to keep your bottle fresh and clean.</p>
          </div>
          <div className="feature">
            <h3>Chemical-Free</h3>
            <p>Uses light, not chemicals, to purify your water naturally.</p>
          </div>
          <div className="feature">
            <h3>Rechargeable</h3>
            <p>USB rechargeable battery lasts up to one month on a single charge.</p>
          </div>
        </div>
      </section>

      <section className="tech-section">
        <h2>How It Works</h2>
        <div className="how-it-works">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Fill Your Bottle</h3>
            <p>Add water from any source - tap, fountain, or filtered.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Activate PureVis™</h3>
            <p>Double-tap the cap to initiate a 60-second purification cycle.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Enjoy Pure Water</h3>
            <p>Drink confidently knowing your water is purified.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Experience the difference</h2>
        <Link to="/products" className="cta-button">Shop Now</Link>
      </section>
    </div>
  );
}
