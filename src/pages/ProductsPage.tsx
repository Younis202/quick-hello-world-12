import { Link } from 'react-router-dom';

const products = [
  {
    id: 'purevis',
    name: 'LARQ Bottle PureVis™',
    price: 99,
    image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1702404399/SKU/BSWD050A/BSWD050A_default.png',
    description: 'Self-cleaning bottle with UV-C purification'
  },
  {
    id: 'pitcher',
    name: 'LARQ Pitcher PureVis™',
    price: 149,
    image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1702405766/SKU/QUWA150A/QUWA150A_default.png',
    description: 'Advanced filtration and UV-C purification pitcher'
  },
  {
    id: 'flip-top',
    name: 'LARQ Bottle Flip Top',
    price: 42,
    image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1702404408/SKU/BDFT050A/BDFT050A_default.png',
    description: 'Insulated bottle with easy flip-top lid'
  },
  {
    id: 'movement',
    name: 'LARQ Bottle Movement',
    price: 35,
    image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1702404361/SKU/BDMV070A/BDMV070A_default.png',
    description: 'Lightweight bottle for everyday hydration'
  },
  {
    id: 'filtered',
    name: 'LARQ Bottle Filtered',
    price: 58,
    image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1702404374/SKU/BDFP050A/BDFP050A_default.png',
    description: 'On-the-go filtration for clean water anywhere'
  },
  {
    id: 'swig-top',
    name: 'LARQ Bottle Swig Top',
    price: 42,
    image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1702404426/SKU/BDSW050A/BDSW050A_default.png',
    description: 'Wide-mouth insulated bottle'
  }
];

export default function ProductsPage() {
  return (
    <div className="products-page">
      <section className="products-hero">
        <h1>Shop All Products</h1>
        <p>Discover our full range of self-cleaning water bottles and pitchers.</p>
      </section>

      <section className="products-filters">
        <div className="filter-buttons">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Bottles</button>
          <button className="filter-btn">Pitchers</button>
          <button className="filter-btn">Accessories</button>
        </div>
      </section>

      <section className="products-grid-section">
        <div className="products-grid">
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">From ${product.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
