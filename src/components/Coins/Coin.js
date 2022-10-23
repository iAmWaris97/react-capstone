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
        <p className="detail-name">
          {detail.name}
        </p>
      </div>
      <div className="more-info">
        <div className="detail-col">
          <span className="title">Price: </span>
          <span className="det">{detail.price}</span>
        </div>
        <div className="detail-col">
          <span className="title">Symbol :</span>
          <span className="det">{detail.symbol}</span>
        </div>
        <div className="detail-col">
          <span className="title">Ranking :</span>
          <span className="det">{detail.rank}</span>
        </div>
        <div className="detail-col">
          <span className="title"> Market Cap: </span>
          <span className="det">{detail.marketCap}</span>
        </div>
        <div className="detail-col">
          <span className="title">Price differ (Week): </span>
          <span className="det">{detail.priceChange1w}</span>
        </div>
        <div className="detail-col">
          <span className="title">Available Supply: </span>
          <span className="det">{detail.availableSupply}</span>
        </div>
      </div>
    </div>
  );
};

export default Coin;
