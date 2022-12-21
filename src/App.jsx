import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components';
import { HomePage } from './pages';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
      </Routes>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
