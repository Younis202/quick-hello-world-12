import { useParams, Link } from 'react-router-dom';

const products: Record<string, {
  name: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}> = {
  'bottle-purevis': {
    name: 'LARQ Bottle PureVis™',
    price: '$99',
    image: 'https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto,w_600/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/LBMB_CC_1/LBMB_CC_1.png',
    description: 'The award-winning LARQ Bottle PureVis™ is the world\'s first self-cleaning water bottle. Using UV-C LED technology, it neutralizes up to 99.9999% of harmful, odor-causing bacteria and viruses.',
    features: [
      'UV-C LED technology neutralizes up to 99.9999% of bacteria',
      'Self-cleaning cycle activates every 2 hours',
      'Double-wall vacuum insulation',
      'Keeps water cold for 24 hours, hot for 12 hours',
      '17 oz / 500ml capacity',
      'USB rechargeable - lasts up to 1 month'
    ]
  },
  'bottle-flip-top': {
    name: 'LARQ Bottle Flip Top',
    price: '$48',
    image: 'https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto,w_600/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/LBFT_SG_1/LBFT_SG_1.png',
    description: 'The LARQ Bottle Flip Top combines convenience with performance. The easy-access flip-top lid makes hydration effortless while the double-wall insulation keeps your drinks at the perfect temperature.',
    features: [
      'Easy-access flip-top lid',
      'Double-wall vacuum insulation',
      'Keeps water cold for 24 hours',
      '25 oz / 740ml capacity',
      'BPA-free and non-toxic',
      'Dishwasher safe'
    ]
  },
  'pitcher-purevis': {
    name: 'LARQ Pitcher PureVis™',
    price: '$149',
    image: 'https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto,w_600/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/LPUP_PW_1/LPUP_PW_1.png',
    description: 'The LARQ Pitcher PureVis™ combines advanced nano zero filtration with UV-C LED purification technology for the purest drinking water at home.',
    features: [
      'Nano Zero filtration removes contaminants',
      'UV-C LED purification technology',
      'Removes lead, chlorine, and more',
      '8-cup / 1.9L capacity',
      'Filter lasts up to 60 gallons',
      'Sleek design fits in any fridge'
    ]
  }
};

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? products[id] : null;

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product not found</h1>
        <p>The product you're looking for doesn't exist.</p>
        <Link to="/products" className="back-link">Back to products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="product-gallery">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>
        
        <div className="features">
          <h3>Features</h3>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}
