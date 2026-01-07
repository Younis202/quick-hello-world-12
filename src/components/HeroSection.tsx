import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage: string;
  overlayColor?: string;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  ctaText = "Shop now", 
  ctaLink = "/products",
  backgroundImage,
  overlayColor = "rgba(0,0,0,0.3)"
}: HeroSectionProps) {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay" style={{ backgroundColor: overlayColor }} />
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <Link to={ctaLink} className="hero-cta">{ctaText}</Link>
      </div>
    </section>
  );
}
