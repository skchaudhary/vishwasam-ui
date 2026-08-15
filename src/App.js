import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/Menu/Sidebar";
import Home from "./components/home/Home";
import ProductsPage from "./components/products/ProductsPage";
import ProductDetail from "./components/products/ProductDetail";
import Services from "./components/services/Services";
import News from "./components/news/News";
import About from "./components/about/About";
import ContactUs from "./components/contact-us/ContactUs";
import PrivacyPolicy from "./components/privacy/PrivacyPolicy";
import Terms from "./components/terms/Terms";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <aside className="App-sidebar">
          <Sidebar />
        </aside>

        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
      </div>

      <footer className="App-footer">
        <div className="App-footer-content">
          <span>© 2026 Bharwaliya — Home &amp; Kitchen Products India</span>
          <div className="App-footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/contact-us">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
