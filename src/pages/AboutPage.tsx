import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About LARQ</h1>
        <p>Revolutionizing hydration through innovative technology</p>
      </div>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At LARQ, we're on a mission to make clean water accessible to everyone. We believe 
          that staying hydrated shouldn't come with the worry of bacteria, chemicals, or 
          environmental waste. That's why we created the world's first self-cleaning water bottle.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          LARQ was founded with a simple idea: what if your water bottle could keep itself clean? 
          As avid travelers and outdoor enthusiasts, our founders experienced firsthand the 
          challenges of staying hydrated with clean water. They set out to create a solution 
          that would eliminate the need for harmful chemicals while ensuring pure, fresh water 
          every time.
        </p>
        <p>
          After years of research and development, we launched the LARQ Bottle PureVis™ in 2018, 
          becoming the world's first self-cleaning water bottle and pitcher company. Today, 
          we continue to innovate and expand our product line to help more people drink better water.
        </p>
      </section>

      <section className="about-section">
        <h2>As Seen On</h2>
        <div className="press-logos">
          <span>Shark Tank</span>
          <span>Forbes</span>
          <span>TechCrunch</span>
          <span>Wired</span>
          <span>Good Morning America</span>
        </div>
      </section>

      <section className="about-section">
        <h2>Sustainability</h2>
        <p>
          We're committed to reducing single-use plastic waste. By investing in a reusable 
          LARQ bottle, you're not only getting clean water but also helping to reduce the 
          billions of plastic bottles that end up in landfills and oceans every year.
        </p>
      </section>

      <section className="cta-section">
        <h2>Join the hydration revolution</h2>
        <Link to="/products" className="cta-button">Shop Now</Link>
      </section>
    </div>
  );
}
