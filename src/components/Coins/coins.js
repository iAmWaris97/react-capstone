import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Coins.css';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAssests } from '../../redux/Coins/coinsSlice';

const Coins = () => {
  const dispatch = useDispatch();
  const assetList = useSelector((state) => state.coins);
  useEffect(() => {
    if (!assetList.length) {
      dispatch(fetchAssests());
    }
  });
  const [searchcoin, setSearchcoin] = useState('');
  const onSearch = (e) => {
    setSearchcoin(e.target.value);
  };
  const searched = assetList.filter(
    (filteredCoin) => filteredCoin.name.toLowerCase().includes(searchcoin.toLowerCase())
      || filteredCoin.symbol.toLowerCase().includes(searchcoin.toLowerCase()),
  );

  return (
    <>
      <nav className="navbar">
        <h1>SomeApp</h1>
      </nav>
      <Container>
        <Row>
          <Col className="welcome">
            <div className="welcome-body">
              <p>Welcome!</p>
              <p>CryptoHouse</p>
            </div>
          </Col>
        </Row>
        <Row className="filter">
          <div className="filter-body">
            <span>Filter:</span>
            <input
              type="text"
              size="sm"
              value={searchcoin}
              onChange={onSearch}
            />
          </div>
        </Row>
        <Row className="cryptos">
          {searched.map((asset) => (
            <Col
              xs={6}
              className="coll"
              Key={`${asset.asset_id}${Math.random * 10}`}
            >
              <Link
                className="crypto-card"
                Key={asset.asset_id}
                to={`/crypto/${asset.id}`}
              >
                <Row className="asset-price">
                  <p>{asset.price}</p>
                </Row>
                <Row>
                  <Col>
                    <Image className="icon" src={asset.icon} />
                  </Col>
                  <Col className="asset-detail">
                    <span className="asset-code">{asset.symbol}</span>
                    <span className="asset-name">{asset.name}</span>
                  </Col>
                </Row>
                <Row />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Coins;
