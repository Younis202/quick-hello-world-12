import { Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    author: 'Sarah M.',
    rating: 5,
    title: 'Life-changing bottle!',
    content: 'The best water bottle I\'ve ever owned. The self-cleaning feature is a game-changer! No more worrying about mold or bacteria. Worth every penny.',
    date: 'December 2024',
    verified: true
  },
  {
    id: 2,
    author: 'James T.',
    rating: 5,
    title: 'Fresh water all day',
    content: 'Finally, a bottle that keeps my water fresh all day. I take it hiking, to the gym, and to work. The insulation is amazing too - ice stays frozen for hours.',
    date: 'November 2024',
    verified: true
  },
  {
    id: 3,
    author: 'Emily R.',
    rating: 5,
    title: 'Sleek and functional',
    content: 'Love the sleek design and the peace of mind knowing my water is pure. It\'s become an essential part of my daily routine.',
    date: 'November 2024',
    verified: true
  },
  {
    id: 4,
    author: 'Michael K.',
    rating: 4,
    title: 'Great for travel',
    content: 'I travel a lot for work and this bottle gives me confidence to drink water anywhere. The battery life is incredible.',
    date: 'October 2024',
    verified: true
  },
  {
    id: 5,
    author: 'Lisa P.',
    rating: 5,
    title: 'Perfect gift',
    content: 'Bought this as a gift for my husband and he loves it! Now I want one for myself. The quality is outstanding.',
    date: 'October 2024',
    verified: true
  },
  {
    id: 6,
    author: 'David W.',
    rating: 5,
    title: 'Eco-friendly and effective',
    content: 'Switched from single-use plastic bottles to LARQ. Not only am I helping the environment, but my water tastes so much better.',
    date: 'September 2024',
    verified: true
  }
];

export default function ReviewsPage() {
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <div className="reviews-page">
      <section className="reviews-hero">
        <h1>Customer Reviews</h1>
        <p>See what our customers are saying about LARQ products.</p>
      </section>

      <section className="reviews-summary">
        <div className="rating-summary">
          <div className="rating-number">{averageRating.toFixed(1)}</div>
          <div className="rating-stars">{'★'.repeat(Math.round(averageRating))}</div>
          <div className="rating-count">Based on {reviews.length} reviews</div>
        </div>
      </section>

      <section className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="review-stars">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
              {review.verified && <span className="verified-badge">Verified Purchase</span>}
            </div>
            <h3>{review.title}</h3>
            <p className="review-content">{review.content}</p>
            <div className="review-footer">
              <span className="review-author">{review.author}</span>
              <span className="review-date">{review.date}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="reviews-cta">
        <h2>Join Thousands of Happy Customers</h2>
        <Link to="/products" className="btn-primary">Shop Now</Link>
      </section>
    </div>
  );
}
