import { useParams, Link } from 'react-router-dom';

const productsData: Record<string, {
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
}> = {
  'purevis': {
    name: 'LARQ Bottle PureVis™',
    price: 99,
    image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1702404399/SKU/BSWD050A/BSWD050A_default.png',
    description: 'The award-winning self-cleaning bottle that uses UV-C LED technology to eliminate up to 99.9999% of bio-contaminants from your water and bottle.',
    features: [
      'UV-C LED purification technology',
      'Self-cleaning every 2 hours',
      'Rechargeable via USB',
      'Double-wall vacuum insulation',
      '500ml / 17oz capacity'
    ]
  },
  'pitcher': {
    name: 'LARQ Pitcher PureVis™',
    price: 149,
    image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1702405766/SKU/QUWA150A/QUWA150A_default.png',
    description: 'Advanced nano zero filter and UV-C LED purification for the purest water at home.',
    features: [
      'Nano Zero filter technology',
      'UV-C LED purification',
      'Self-cleaning mode',
      '1.9L / 8 cups capacity',
      'Low maintenance filters'
    ]
  },
  'flip-top': {
    name: 'LARQ Bottle Flip Top',
    price: 42,
    image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1702404408/SKU/BDFT050A/BDFT050A_default.png',
    description: 'An insulated water bottle with an easy flip-top lid for one-handed drinking.',
    features: [
      'Double-wall vacuum insulation',
      'One-handed flip-top lid',
      'BPA-free materials',
      '500ml / 17oz capacity',
      'Keeps drinks cold 24 hours'
    ]
  }
};

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? productsData[id] : null;

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>
        <p>Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/products" className="btn-primary">View All Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-detail-price">${product.price}</p>
          <p className="product-detail-description">{product.description}</p>
          
          <div className="product-features">
            <h3>Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="product-actions">
            <button className="btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
