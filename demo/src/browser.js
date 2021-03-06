import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

export default () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.querySelector('#main')
  );
};
