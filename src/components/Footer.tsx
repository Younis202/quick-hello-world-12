import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/products">Bottles</Link></li>
            <li><Link to="/products">Pitchers</Link></li>
            <li><Link to="/products">Accessories</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/quality">Water Quality</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 LARQ. All rights reserved.</p>
      </div>
    </footer>
  );
}
