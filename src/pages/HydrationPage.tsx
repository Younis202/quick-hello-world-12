import { Link } from 'react-router-dom';

export default function HydrationPage() {
  return (
    <div className="hydration-page">
      <div className="page-header">
        <h1>Hydration Guide</h1>
        <p>Everything you need to know about staying properly hydrated</p>
      </div>

      <section className="hydration-section">
        <h2>Why Hydration Matters</h2>
        <p>
          Water is essential for virtually every function in your body. From regulating 
          temperature to transporting nutrients, proper hydration is key to optimal health 
          and performance.
        </p>
      </section>

      <section className="hydration-section">
        <h2>How Much Water Do You Need?</h2>
        <p>
          While the "8 glasses a day" rule is a good starting point, your actual needs 
          depend on many factors including your activity level, climate, and body size. 
          A good rule of thumb is to drink half your body weight in ounces daily.
        </p>
        <div className="hydration-calculator">
          <h3>Quick Guide</h3>
          <ul>
            <li>Sedentary: 8-10 cups (64-80 oz) per day</li>
            <li>Moderately active: 10-12 cups (80-96 oz) per day</li>
            <li>Very active: 12+ cups (96+ oz) per day</li>
          </ul>
        </div>
      </section>

      <section className="hydration-section">
        <h2>Signs of Dehydration</h2>
        <div className="signs-grid">
          <div className="sign">
            <h3>Thirst</h3>
            <p>If you're feeling thirsty, you're already mildly dehydrated.</p>
          </div>
          <div className="sign">
            <h3>Dark Urine</h3>
            <p>Well-hydrated urine should be light yellow or clear.</p>
          </div>
          <div className="sign">
            <h3>Fatigue</h3>
            <p>Dehydration can cause tiredness and decreased energy.</p>
          </div>
          <div className="sign">
            <h3>Headaches</h3>
            <p>Many headaches are caused by mild dehydration.</p>
          </div>
        </div>
      </section>

      <section className="hydration-section">
        <h2>Tips for Better Hydration</h2>
        <ul className="tips-list">
          <li>Start your day with a glass of water</li>
          <li>Carry a reusable water bottle with you</li>
          <li>Set reminders to drink water throughout the day</li>
          <li>Eat water-rich foods like fruits and vegetables</li>
          <li>Drink water before, during, and after exercise</li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>Stay hydrated with LARQ</h2>
        <Link to="/products" className="cta-button">Shop Now</Link>
      </section>
    </div>
  );
}
