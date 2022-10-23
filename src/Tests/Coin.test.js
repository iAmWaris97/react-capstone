import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/configureStore';
import Detail from '../components/Coins/Coin';

describe('Testing coin component if:', () => {
  it('It renderes individual coin', () => {
    const bundle = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Detail />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(bundle).toMatchSnapshot();
  });
});
