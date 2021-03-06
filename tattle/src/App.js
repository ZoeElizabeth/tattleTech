import React, { Component } from 'react';
import './App.css';
import './styles_css/App.css';

import Aside from './components/Aside.js';
import Tweets from './components/Tweets';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header/>
        </header>
          <div>
          <div className="mainApp">

            <aside className="asideApp">
            <Aside/>
            </aside>
            <article>
              <Tweets/>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
