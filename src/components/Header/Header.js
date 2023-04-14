import './Header.css';
import { Link } from 'react-router-dom';
import { UilAngleLeft, UilBitcoinCircle } from '@iconscout/react-unicons';

const Header = () => (
  <nav className="navbar flex">
    <div className="back">
      <Link to="/">
        <UilAngleLeft />
      </Link>
    </div>
    <div className="app-title">
      <span>Moneyster</span>
    </div>
    <div className="app-icons">
      <div className="bitcoin">
        <UilBitcoinCircle />
      </div>
    </div>
  </nav>
);

export default Header;
