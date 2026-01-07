import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 'bottle-purevis',
    name: 'LARQ Bottle PureVis™',
    price: '$99',
    image: 'https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto,w_400/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/LBMB_CC_1/LBMB_CC_1.png',
    description: 'Self-cleaning bottle with UV-C LED technology'
  },
  {
    id: 'bottle-purevis-movement',
    name: 'LARQ Bottle Movement PureVis™',
    price: '$118',
    image: 'https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto,w_400/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/LBMB_MG_1/LBMB_MG_1.png',
    description: 'Lightweight with self-cleaning technology'
  },
  {
    id: 'bottle-flip-top',
    name: 'LARQ Bottle Flip Top',
    price: '$48',
    image: 'https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto,w_400/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/LBFT_SG_1/LBFT_SG_1.png',
    description: 'Insulated stainless steel with flip-top lid'
  },
  {
    id: 'bottle-swig-top',
    name: 'LARQ Bottle Swig Top',
    price: '$42',
    image: 'https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto,w_400/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/LBST_ON_1/LBST_ON_1.png',
    description: 'Compact and lightweight for everyday use'
  },
  {
    id: 'pitcher-purevis',
    name: 'LARQ Pitcher PureVis™',
    price: '$149',
    image: 'https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto,w_400/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/LPUP_PW_1/LPUP_PW_1.png',
    description: 'Advanced filtration with UV-C purification'
  },
  {
    id: 'drinkware-set',
    name: 'LARQ Drinkware Set',
    price: '$185',
    image: 'https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto,w_400/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1687464695/set-hero/set-hero.png',
    description: 'Complete hydration solution'
  }
];

export default function ProductsPage() {
  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Shop All Products</h1>
        <p>Discover our range of self-cleaning water bottles and pitchers</p>
      </div>
      
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
