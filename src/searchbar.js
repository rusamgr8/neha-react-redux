import React, {Component} from 'react';
import ResultList from './result_list';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.state = {term: '', results: []};

    this.onClick = this.onClick.bind(this);
  }

  onClick(event){
    //console.log(event.target.value);
    this.setState({
      results:[
        {
            id: 1,
            name: 'Neha',
            comment: 'Awesome!!!',
            image: 'http://d2rfsfyh2505gh.cloudfront.net/wp-content/uploads/2014/08/Neha_Dhupia-compressed.jpg'

        },{
          id: 2,
          name: 'Jaya',
          comment: 'Woww!!!',
          image: 'http://drop.ndtv.com/albums/ENTERTAINMENT/jayabachchan/2.jpg'
        }


      ]

    });
  }

  onInputChange(event){
    //console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <div>
        <input placeholder="Enter First Name" className="row form-control mark col-xs-1" value={this.state.term} onChange={this.onInputChange}/>
        <button onClick={this.onClick}>Search</button>
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchBar;
