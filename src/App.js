import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Menu/Sidebar';
import Home from './components/home/Home';
import ProductsPage from './components/products/ProductsPage';
import ProductDetail from './components/products/ProductDetail';
import Services from './components/services/Services';
import News from './components/news/News';
import About from './components/about/About';
import ContactUs from './components/contact-us/ContactUs';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <aside className="App-sidebar">
          <Sidebar />
        </aside>

        <main className="App-main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='/services' element={<Services />} />
            <Route path='/news' element={<News />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/contact-us' element={<ContactUs />} />
          </Routes>
        </main>
      </div>

      <footer className="App-footer">
        © Bharwaliya.com, or its affiliates
      </footer>
    </div>
  );
}

export default App;
