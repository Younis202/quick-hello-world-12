import { Link } from 'react-router-dom';

export default function QualityPage() {
  return (
    <div className="quality-page">
      <section className="quality-hero">
        <h1>Water Quality</h1>
        <p>Understanding what's in your water and why it matters.</p>
      </section>

      <section className="quality-intro">
        <div className="quality-content">
          <h2>Why Water Quality Matters</h2>
          <p>
            Water is essential to life, yet millions of people around the world don't have access 
            to clean, safe drinking water. Even in developed countries, tap water can contain 
            contaminants that affect taste, smell, and health.
          </p>
          <p>
            LARQ products are designed to give you peace of mind, knowing that every sip is as 
            pure as nature intended.
          </p>
        </div>
      </section>

      <section className="quality-contaminants">
        <h2>Common Water Contaminants</h2>
        <div className="contaminants-grid">
          <div className="contaminant-card">
            <h3>Bacteria</h3>
            <p>E. coli, Salmonella, and other harmful bacteria can cause serious illness.</p>
          </div>
          <div className="contaminant-card">
            <h3>Viruses</h3>
            <p>Waterborne viruses like Norovirus can spread through contaminated water.</p>
          </div>
          <div className="contaminant-card">
            <h3>Chlorine</h3>
            <p>Used to disinfect water but can affect taste and has long-term health concerns.</p>
          </div>
          <div className="contaminant-card">
            <h3>Lead</h3>
            <p>Old pipes can leach lead into drinking water, especially harmful to children.</p>
          </div>
        </div>
      </section>

      <section className="quality-solution">
        <h2>The LARQ Solution</h2>
        <p>
          Our UV-C LED technology eliminates biological contaminants without chemicals, 
          while our advanced filters remove chlorine, lead, and other impurities. 
          The result? Pure, great-tasting water wherever you go.
        </p>
        <Link to="/technology" className="btn-secondary">Learn About Our Technology</Link>
      </section>

      <section className="quality-cta">
        <h2>Clean Water, Anywhere</h2>
        <p>Take control of your water quality with LARQ.</p>
        <Link to="/products" className="btn-primary">Shop Now</Link>
      </section>
    </div>
  );
}
