import './App.css'
import Navbar from './components/layouts/Navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;