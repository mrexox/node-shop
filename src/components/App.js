import React from 'react';
//import logo from '../logo.svg';
import '../styles/App.css';

import Menu from './Menu';
import FilteredPostList from './FilteredPostList';
import PostFilter from './PostFilter';

const App = () => (
	<div>
	<Menu />
	<PostFilter />
	<FilteredPostList />
	</div>
);

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/

export default App;
