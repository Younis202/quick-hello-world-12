import { Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    date: 'December 2025',
    product: 'LARQ Bottle PureVis™',
    review: 'The best water bottle I\'ve ever owned. The self-cleaning feature is a game-changer! No more worrying about bacteria building up in my bottle. I use it every day at the gym and it always stays fresh.'
  },
  {
    id: 2,
    name: 'Michael T.',
    rating: 5,
    date: 'November 2025',
    product: 'LARQ Pitcher PureVis™',
    review: 'Finally, a pitcher that actually works. The water tastes noticeably better and I love knowing it\'s purified. The UV-C technology is brilliant and the design looks great in my kitchen.'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    date: 'October 2025',
    product: 'LARQ Bottle PureVis™',
    review: 'Worth every penny. I travel a lot for work and this bottle has been a lifesaver. I can fill it up anywhere and know my water is safe to drink. The battery lasts forever too!'
  },
  {
    id: 4,
    name: 'David K.',
    rating: 4,
    date: 'September 2025',
    product: 'LARQ Bottle Flip Top',
    review: 'Great bottle for everyday use. The insulation is amazing - my water stays cold all day. The flip top is super convenient and doesn\'t leak. Only wish it had the UV-C feature.'
  },
  {
    id: 5,
    name: 'Emily R.',
    rating: 5,
    date: 'August 2025',
    product: 'LARQ Bottle PureVis™',
    review: 'I was skeptical at first but this bottle exceeded my expectations. The technology is impressive and it really does keep the bottle fresh. No more smelly water bottles!'
  },
  {
    id: 6,
    name: 'James H.',
    rating: 5,
    date: 'July 2025',
    product: 'LARQ Pitcher PureVis™',
    review: 'Replaced my old pitcher with LARQ and never looked back. The filtration combined with UV-C purification means I\'m getting the cleanest water possible. My whole family loves it.'
  }
];

export default function ReviewsPage() {
  return (
    <div className="reviews-page">
      <div className="page-header">
        <h1>Customer Reviews</h1>
        <p>See what our customers are saying about LARQ products</p>
      </div>

      <div className="reviews-summary">
        <div className="average-rating">
          <span className="rating-number">4.8</span>
          <div className="stars">★★★★★</div>
          <span className="total-reviews">Based on 10,000+ reviews</span>
        </div>
      </div>

      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="stars">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
              <span className="date">{review.date}</span>
            </div>
            <p className="review-text">{review.review}</p>
            <div className="review-footer">
              <span className="reviewer-name">{review.name}</span>
              <span className="product-name">Verified Purchase: {review.product}</span>
            </div>
          </div>
        ))}
      </div>

      <section className="cta-section">
        <h2>Ready to experience LARQ?</h2>
        <Link to="/products" className="cta-button">Shop Now</Link>
      </section>
    </div>
  );
}
