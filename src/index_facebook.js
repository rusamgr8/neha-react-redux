/* eslint-disable no-console */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';

const App = function(){
  return <div>Neha</div>;
}

class App1 extends Component {
  constructor(props){
    super(props);
    this.state = {username:'Search Term1'}
  }
  render() {
    return (
      <div>
        <SearchBar username={this.state.username} address={{a: '123'}}/>
      </div>
    );
  }
}

ReactDOM.render(<App1 />, document.getElementById('app'));

console.log('hi');
