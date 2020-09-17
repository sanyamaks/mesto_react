import React from 'react';

import './fonts/fonts.css';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Places from './Components/Places/Places';
import Popup from './Components/Popup/Popup';

function App() {
  return (
    <div className="app">
      <Header className="app__header" />
      <Profile className="app__profile" />
      <Places className="app__places" />
      {/* <Popup /> */}
    </div>
  );
}

export default App;
