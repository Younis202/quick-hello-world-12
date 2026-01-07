import { Link } from 'react-router-dom';

export default function HydrationPage() {
  return (
    <div className="hydration-page">
      <section className="hydration-hero">
        <h1>Hydration Club</h1>
        <p>Join our rewards program and earn points on every purchase.</p>
      </section>

      <section className="hydration-benefits">
        <h2>Member Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Earn Points</h3>
            <p>Get 1 point for every $1 spent on LARQ products.</p>
          </div>
          <div className="benefit-card">
            <h3>Exclusive Discounts</h3>
            <p>Members-only sales and early access to new products.</p>
          </div>
          <div className="benefit-card">
            <h3>Free Shipping</h3>
            <p>Enjoy free shipping on all orders over $50.</p>
          </div>
          <div className="benefit-card">
            <h3>Birthday Rewards</h3>
            <p>Special gifts and discounts on your birthday.</p>
          </div>
        </div>
      </section>

      <section className="hydration-tiers">
        <h2>Membership Tiers</h2>
        <div className="tiers-grid">
          <div className="tier-card">
            <h3>Blue</h3>
            <p className="tier-points">0 - 499 points</p>
            <ul>
              <li>1x points on purchases</li>
              <li>Member-only offers</li>
            </ul>
          </div>
          <div className="tier-card featured">
            <h3>Silver</h3>
            <p className="tier-points">500 - 999 points</p>
            <ul>
              <li>1.5x points on purchases</li>
              <li>Early access to sales</li>
              <li>Free shipping on all orders</li>
            </ul>
          </div>
          <div className="tier-card">
            <h3>Gold</h3>
            <p className="tier-points">1000+ points</p>
            <ul>
              <li>2x points on purchases</li>
              <li>VIP customer support</li>
              <li>Exclusive products</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hydration-cta">
        <h2>Start Earning Today</h2>
        <p>Sign up for free and start earning points on your first purchase.</p>
        <Link to="/products" className="btn-primary">Shop Now</Link>
      </section>
    </div>
  );
}
