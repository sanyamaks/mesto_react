import React from 'react';

import './fonts/fonts.css';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Places from './Components/Places/Places';

function App() {
  return (
    <div className="app">
      <Header className="app__header" />
      <Profile className="app__profile" />
      <Places className="app__places" />
    </div>
  );
}

export default App;
