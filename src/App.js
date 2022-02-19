import './App.css';
import Header from './components/Header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
