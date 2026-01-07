import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About LARQ</h1>
        <p>We're on a mission to provide access to brilliantly clean water for everyone, everywhere.</p>
      </section>

      <section className="about-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            LARQ was founded in 2017 with a simple yet ambitious goal: to create the world's first 
            self-cleaning water bottle. Our founders, frustrated by the environmental impact of 
            single-use plastics and the inconvenience of traditional reusable bottles, set out to 
            revolutionize the way we drink water.
          </p>
          <p>
            Today, LARQ is the leading brand in UV-C LED water purification technology, trusted by 
            over a million customers worldwide. Our products have prevented billions of single-use 
            plastic bottles from ending up in landfills and oceans.
          </p>
        </div>
        <div className="story-image">
          <img 
            src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1716999148/Product-pages/2024-PDP-update/purevis-bottle-pdp/technology-module-purevis-desktop.png" 
            alt="LARQ Team"
          />
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We push the boundaries of technology to create products that truly make a difference.</p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>Every decision we make considers our impact on the planet and future generations.</p>
          </div>
          <div className="value-card">
            <h3>Quality</h3>
            <p>We never compromise on the quality of our products or customer experience.</p>
          </div>
          <div className="value-card">
            <h3>Transparency</h3>
            <p>We believe in being open and honest about our products, practices, and progress.</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Join the Movement</h2>
        <p>Be part of the change towards a more sustainable future.</p>
        <Link to="/products" className="btn-primary">Shop Now</Link>
      </section>
    </div>
  );
}
