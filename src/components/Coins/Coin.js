import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchDetail } from '../../redux/Coins/coinSlice';
import './Coin.css';

const Coin = () => {
  const data = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchDetail(data.id));
  });

  return (
    <div className="coin-container">
      <div className="info">
        <img src={detail.icon} alt={detail.name} />
        <p className="detail-price">
          $
          {detail.price}
        </p>
      </div>
      <div className="more-info">
        <div className="detail-col-odd">
          <span className="header">Coin name :</span>
          <span>{detail.name}</span>
        </div>
        <div className="detail-col">
          <span className="header">Coin symbol :</span>
          <span>{detail.symbol}</span>
        </div>
        <div className="detail-col-odd">
          <span className="header">Ranking :</span>
          <span>{detail.rank}</span>
        </div>
        <div className="detail-col">
          <span className="header">Price :</span>
          <span>{detail.price}</span>
        </div>
        <div className="detail-col-odd">
          <span className="header"> Market cap :</span>
          <span>{detail.marketCap}</span>
        </div>
        <div className="detail-col">
          <span className="header"> Price change week :</span>
          <span>{detail.priceChange1w}</span>
        </div>
        <div className="detail-col-odd">
          <span className="header"> Avail. supply :</span>
          <span>{detail.availableSupply}</span>
        </div>
      </div>
    </div>
  );
};

export default Coin;
