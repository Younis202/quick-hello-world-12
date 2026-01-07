import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  return (
    <Link to={`/products/${id}`} className="product-card">
      <div className="product-image">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        {description && <p>{description}</p>}
        <span className="price">{price}</span>
      </div>
    </Link>
  );
}
