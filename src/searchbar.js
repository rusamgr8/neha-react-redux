import React, {Component} from 'react';
import CommentList from './comment_list';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    //this.state = {term: '', results: []};
    this.state = {term: "",
      results:[
        {
            id: 1,
            name: 'Neha',
            comment: 'Awesome!!!',
            image: 'http://d2rfsfyh2505gh.cloudfront.net/wp-content/uploads/2014/08/Neha_Dhupia-compressed.jpg',
            likes: 5


        },{
          id: 2,
          name: 'Jaya',
          comment: 'Woww!!!',
          image: 'http://drop.ndtv.com/albums/ENTERTAINMENT/jayabachchan/2.jpg',
          likes: 5
        }


      ]

    }
    //this.onClick = this.onClick.bind(this);
  }

  /*onClick(event){
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
  }*/

  onInputChange(event){
    //console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <div>
        <CommentList results={this.state.results} />
      </div>
    );
  }
}

export default SearchBar;
