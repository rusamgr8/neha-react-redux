/* eslint-disable no-console */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';

const App = function(){
  return <div>Neha</div>;
}

class App1 extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App1 />, document.getElementById('app'));

console.log('hi');
