import { Link } from 'react-router-dom';

export default function QualityPage() {
  return (
    <div className="quality-page">
      <div className="page-header">
        <h1>Water Quality</h1>
        <p>Understanding what's in your water and how we help</p>
      </div>

      <section className="quality-section">
        <h2>Why Water Quality Matters</h2>
        <p>
          Every day, we consume water that may contain invisible contaminants. From bacteria 
          to viruses, chlorine to lead, the quality of your water directly impacts your health. 
          LARQ is committed to helping you drink cleaner, safer water.
        </p>
      </section>

      <section className="quality-section">
        <h2>Common Water Contaminants</h2>
        <div className="contaminants-grid">
          <div className="contaminant">
            <h3>Bacteria</h3>
            <p>E. coli, salmonella, and other harmful bacteria can cause serious illness.</p>
          </div>
          <div className="contaminant">
            <h3>Viruses</h3>
            <p>Waterborne viruses can spread disease and infection.</p>
          </div>
          <div className="contaminant">
            <h3>Chlorine</h3>
            <p>Added to tap water for safety but affects taste and smell.</p>
          </div>
          <div className="contaminant">
            <h3>Lead</h3>
            <p>Old pipes can leach lead into your drinking water.</p>
          </div>
        </div>
      </section>

      <section className="quality-section">
        <h2>The LARQ Solution</h2>
        <p>
          Our UV-C LED technology neutralizes up to 99.9999% of harmful bacteria and viruses 
          without chemicals. Combined with our nano zero filtration in LARQ Pitcher, we provide 
          comprehensive water purification for your home and on-the-go.
        </p>
      </section>

      <section className="cta-section">
        <h2>Drink better water today</h2>
        <Link to="/products" className="cta-button">Shop Now</Link>
      </section>
    </div>
  );
}
