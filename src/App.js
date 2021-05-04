import React from 'react';
import LeftNav from './components/LeftNav/LeftNav';
import TopNav from './components/TopNav/TopNav';
import WatchList from './Pages/WatchList';
import Main from './Pages/Main';
import Chat from './components/chat/Chat';
import Join from './components/Join/Join';
import TrendingArticles from './components/TrendingArticles/TrendingArticles';
import Premium from './Pages/Premium/Premium';
import Watch from './components/Watch/Watch';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  
  render() {
    
      return (
        <Router>
          <div className="App">
              <TopNav/>
              <LeftNav/>
              <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path={"/watchlist"} component={WatchList} />
                    <Route path={"/chat"} component={Chat} />
                    <Route path={"/join"} component={Join} />
                    <Route path={"/premium"} component={Premium} />
                    <Route path={"/trending"} component={TrendingArticles} />
                    <Route path={"/watch"} component={Watch} />
              </Switch>
          </div>
         </Router>
    );
  }
}

export default App;
