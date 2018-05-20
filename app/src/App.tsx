import * as React from 'react';
import './App.css';
import BuyerProfile from './components/BuyerProfile';
import GroupProfile from './components/GroupProfile';
import buyers from './data/buyers';
import groups from './data/groups';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HomeGuide</h1>
        </header>
        <BuyerProfile profile={buyers.b1}/>
        <br/>
        <GroupProfile group={groups.g1} />
      </div>
    );
  }
}

export default App;
