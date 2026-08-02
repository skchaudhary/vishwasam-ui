import './App.css';
import NavBar from './components/Menu/NavBar';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/products/ProductList';
import ProductDetail from './components/products/ProductDetail';
import ContactUs from './components/contact-us/ContactUs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
