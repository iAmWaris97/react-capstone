import './App.css';
import Header from './components/Header/Header';
// eslint-disable-next-line import/extensions
import Coins from './components/Coins/Coins.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Coins />
    </div>
  );
}

export default App;
