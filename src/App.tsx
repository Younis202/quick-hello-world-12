import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import HydrationPage from './pages/HydrationPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPage from './pages/ProductsPage';
import QualityPage from './pages/QualityPage';
import ReviewsPage from './pages/ReviewsPage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/hydration" element={<HydrationPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/quality" element={<QualityPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
