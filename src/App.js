import './App.css';
import NavBar from './components/Menu/NavBar';
import {Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        {/* <Router>
          <NavBar/>
          <Routes>
            <Route path='/' ></Route>
            <Route path='/services' ></Route>
            <Route path='/news' ></Route>
            <Route path='/contact-us' children={ContactUs}></Route>
            <Route path='/about-us' ></Route>
          </Routes>       
        </Router> */}
      </header>
    </div>
  );
}

export default App;
