import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Brilliantly Clean Water</h1>
          <p className="hero-subtitle">
            LARQ Bottle PureVis™ is the world's first self-cleaning water bottle and water purification system.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn-primary">Shop Now</Link>
            <Link to="/technology" className="btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1721764715/Homepage-v3/Homepage-hero-desktop.png" 
            alt="LARQ Bottle PureVis"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <path fill="#153A5B" d="M24 7c.352 0 .677.184.858.485.724 1.207 1.637 2.486 2.637 3.854.992 1.355 2.07 2.799 3.082 4.286 2.017 2.963 3.876 6.242 4.412 9.722.537 3.49-.262 6.894-2.191 9.444C30.856 37.356 27.81 39 24 39c-3.81 0-6.857-1.644-8.798-4.21-1.93-2.549-2.727-5.953-2.19-9.443.535-3.48 2.393-6.76 4.41-9.722 1.013-1.487 2.09-2.93 3.083-4.286 1-1.368 1.913-2.647 2.637-3.854A1 1 0 0 1 24 7Z"/>
            </svg>
          </div>
          <h3>Self-Cleaning</h3>
          <p>UV-C LED technology eliminates up to 99.9999% of bio-contaminants</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <path fill="#153A5B" d="M24 4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1ZM12.222 8.808a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 1 1-1.415 1.414l-2.828-2.828a1 1 0 0 1 0-1.414ZM35.778 8.808a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 0 1-1.414-1.414l2.828-2.828a1 1 0 0 1 1.414 0ZM4 24a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM39 24a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM16.465 31.05a1 1 0 0 1 0 1.415l-2.829 2.828a1 1 0 0 1-1.414-1.414l2.828-2.829a1 1 0 0 1 1.415 0ZM31.536 31.05a1 1 0 0 1 1.414 0l2.828 2.829a1 1 0 0 1-1.414 1.414l-2.828-2.828a1 1 0 0 1 0-1.415ZM24 38a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z"/>
              <circle cx="24" cy="24" r="8" stroke="#153A5B" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <h3>UV-C Technology</h3>
          <p>Award-winning purification at the touch of a button</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <path fill="#153A5B" d="M24 8a16 16 0 1 0 0 32 16 16 0 0 0 0-32Zm0 28a12 12 0 1 1 0-24 12 12 0 0 1 0 24Z"/>
              <path fill="#153A5B" d="M24 16a1 1 0 0 1 1 1v6.586l4.707 4.707a1 1 0 0 1-1.414 1.414l-5-5A1 1 0 0 1 23 24v-7a1 1 0 0 1 1-1Z"/>
            </svg>
          </div>
          <h3>Long-lasting Battery</h3>
          <p>Up to 1 month of use on a single charge</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <h2 className="section-title">Our Bestsellers</h2>
        <div className="products-grid">
          <Link to="/products/purevis" className="product-card">
            <div className="product-image">
              <img 
                src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1704834034/SKU/?"
                alt="LARQ Bottle PureVis"
                onError={(e) => {
                  e.currentTarget.src = 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1721764715/Homepage-v3/Homepage-hero-desktop.png';
                }}
              />
            </div>
            <h3>LARQ Bottle PureVis™</h3>
            <p className="product-price">From $99</p>
          </Link>
          
          <Link to="/products/pitcher" className="product-card">
            <div className="product-image">
              <img 
                src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1702405766/SKU/QUWA150A/QUWA150A_default.png"
                alt="LARQ Pitcher PureVis"
              />
            </div>
            <h3>LARQ Pitcher PureVis™</h3>
            <p className="product-price">From $149</p>
          </Link>
          
          <Link to="/products/flip-top" className="product-card">
            <div className="product-image">
              <img 
                src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1702404408/SKU/BDFT050A/BDFT050A_default.png"
                alt="LARQ Bottle Flip Top"
              />
            </div>
            <h3>LARQ Bottle Flip Top</h3>
            <p className="product-price">From $42</p>
          </Link>
        </div>
        <div className="products-cta">
          <Link to="/products" className="btn-primary">View All Products</Link>
        </div>
      </section>

      {/* Technology Section */}
      <section className="tech-section">
        <div className="tech-content">
          <h2>PureVis™ Technology</h2>
          <p>
            Our proprietary UV-C LED technology neutralizes up to 99.9999% of harmful, odor-causing bacteria and viruses. 
            Simply press the button on the cap and watch as pure UV-C light activates to purify your water and clean 
            your bottle's inner surfaces.
          </p>
          <Link to="/technology" className="btn-secondary">Discover the Science</Link>
        </div>
        <div className="tech-image">
          <img 
            src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1716999148/Product-pages/2024-PDP-update/purevis-bottle-pdp/technology-module-purevis-desktop.png" 
            alt="PureVis Technology"
          />
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="sustainability-section">
        <h2>Sustainability First</h2>
        <p>
          Every LARQ product is designed to reduce single-use plastic waste. 
          Join us in our mission to create a cleaner planet, one bottle at a time.
        </p>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">10B+</span>
            <span className="stat-label">Plastic bottles saved</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">1M+</span>
            <span className="stat-label">Happy customers</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">50+</span>
            <span className="stat-label">Countries served</span>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <h2>What People Are Saying</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>"The best water bottle I've ever owned. The self-cleaning feature is a game-changer!"</p>
            <span className="review-author">- Sarah M.</span>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>"Finally, a bottle that keeps my water fresh all day. Worth every penny."</p>
            <span className="review-author">- James T.</span>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>"Love the sleek design and the peace of mind knowing my water is pure."</p>
            <span className="review-author">- Emily R.</span>
          </div>
        </div>
        <Link to="/reviews" className="btn-secondary">Read More Reviews</Link>
      </section>
    </div>
  );
}
