import React, { Component } from 'react';
import menuNav from '../../Components/menuNav';

class App extends Component {
  render() {
    return (
      <div>
        <menuNav>
          <div>Vim</div>
          <div>Vi</div>
          <div>Venci</div>
          <div>Voltei</div>
          </menuNav>
      </div>
    );
  }
}

export default App
