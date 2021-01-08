import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);  // The components should be as simple as possible and network communication should be generated only once each time, many actions occur during testing or actual operation.

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);

