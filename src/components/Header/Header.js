import './Header.css';
import { Link } from 'react-router-dom';
import { UilAngleLeft, UilMicrophone, UilSetting } from '@iconscout/react-unicons';

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
    <div className="app-icons flex">
      <div className="mic">
        <UilMicrophone />
      </div>
      <div className="setting">
        <UilSetting />
      </div>
    </div>
  </nav>
);

export default Header;
