import './Coins.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAssests } from '../../redux/Coins/coinsSlice';

const Coins = () => {
  const dispatch = useDispatch();

  const assets = useSelector((state) => state.coins);
  useEffect(() => {
    if (!assets.length) {
      dispatch(fetchAssests());
    }
  });

  const [searchcoin, setSearchcoin] = useState('');
  const onSearch = (e) => {
    setSearchcoin(e.target.value);
  };

  const searched = assets.filter(
    (filteredCoin) => filteredCoin.name.toLowerCase().includes(searchcoin.toLowerCase())
      || filteredCoin.symbol.toLowerCase().includes(searchcoin.toLowerCase()),
  );

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchcoin}
          onChange={onSearch}
        />
      </div>
      <div className="coins">
        {searched.map((asset, index) => (
          <div
            className={(index % 2 === 1) ? 'odd-bg coin-card' : 'coin-card'}
            key={`${asset.asset_id}${Math.random * 10}`}
          >
            <Link
              className="one-coin"
              Key={asset.asset_id}
              to={`/coin/${asset.id}`}
            >
              <div className="price">
                <p>{asset.price}</p>
              </div>
              <div>
                <img className="icon" src={asset.icon} alt={asset.name.substring(0, 2)} />
              </div>
              <div className="coin-detail">
                <p className="coin-code">{asset.symbol}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coins;
