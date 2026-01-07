import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  {
    id: 'bottle-purevis',
    name: 'LARQ Bottle PureVis™',
    price: '$99',
    image: 'https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto,w_400/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/LBMB_CC_1/LBMB_CC_1.png',
    description: 'Self-cleaning bottle with UV-C LED technology'
  },
  {
    id: 'bottle-flip-top',
    name: 'LARQ Bottle Flip Top',
    price: '$48',
    image: 'https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto,w_400/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/LBFT_SG_1/LBFT_SG_1.png',
    description: 'Insulated stainless steel with flip-top lid'
  },
  {
    id: 'pitcher-purevis',
    name: 'LARQ Pitcher PureVis™',
    price: '$149',
    image: 'https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto,w_400/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/LPUP_PW_1/LPUP_PW_1.png',
    description: 'Advanced filtration with UV-C purification'
  },
  {
    id: 'bottle-swig-top',
    name: 'LARQ Bottle Swig Top',
    price: '$42',
    image: 'https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto,w_400/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/LBST_ON_1/LBST_ON_1.png',
    description: 'Compact and lightweight for everyday use'
  }
];

const promoTiers = [
  { amount: '$40 off', condition: 'orders $200 or more' },
  { amount: '$20 off', condition: 'orders $130 or more' },
  { amount: '$10 off', condition: 'orders $60 or more' }
];

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection 
        title="Brilliant hydration for a brilliant you"
        subtitle="Self-cleaning water bottles that neutralize up to 99.9999% of harmful bacteria using UV-C technology."
        ctaText="Shop now"
        ctaLink="/products"
        backgroundImage="https://res.cloudinary.com/larq/images/f_auto,q_auto/v1766144744/BoxingDay2025_Hero-Desktop/BoxingDay2025_Hero-Desktop.jpg"
      />

      {/* Promo Section */}
      <section className="promo-section">
        <h2>Last chance of the year to shop brilliant hydration on sale!</h2>
        <div className="promo-tiers">
          {promoTiers.map((tier, index) => (
            <div key={index} className="promo-tier">
              <span className="amount">{tier.amount}</span>
              <span className="condition">{tier.condition}</span>
            </div>
          ))}
        </div>
        <Link to="/products" className="promo-cta">Shop now</Link>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Shop our bestsellers</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <Link to="/products" className="view-all">View all products</Link>
      </section>

      {/* Technology Section */}
      <section className="technology-section">
        <div className="tech-content">
          <h2>Award-winning UV-C technology</h2>
          <p>Our patented PureVis™ technology uses UV-C LED light to neutralize up to 99.9999% of harmful, odor-causing bacteria and viruses.</p>
          <Link to="/technology" className="learn-more">Learn more about our technology</Link>
        </div>
        <div className="tech-image">
          <img 
            src="https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/tech-hero/tech-hero.jpg" 
            alt="LARQ UV-C Technology" 
            loading="lazy"
          />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-preview">
        <h2>What people are saying</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>"The best water bottle I've ever owned. The self-cleaning feature is a game-changer!"</p>
            <span className="reviewer">- Sarah M.</span>
          </div>
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>"Finally, a water bottle that stays fresh. No more weird tastes or smells."</p>
            <span className="reviewer">- Michael T.</span>
          </div>
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>"Worth every penny. I use it every day and it's still like new."</p>
            <span className="reviewer">- Jessica L.</span>
          </div>
        </div>
        <Link to="/reviews" className="view-all">Read more reviews</Link>
      </section>
    </div>
  );
}
