import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
// eslint-disable-next-line import/extensions
import Coins from './components/Coins/Coins.js';
import Coin from './components/Coins/Coin';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/coin/:id/" element={<Coin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
