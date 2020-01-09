import React from 'react';
import { Helmet } from 'react-helmet';

import './App.css';
import Snapchat from './snapchat';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta content="Snaptest – Dynamic" property="og:site_name" />
        <meta
          content="This tag is generated from JavaScript."
          property="og:title"
        />
      </Helmet>
      <header className="App-header">
        Share this page!
        <Snapchat />
      </header>
    </div>
  );
}

export default App;
