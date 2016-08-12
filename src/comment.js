import React, {Component} from 'react';

class Comment extends Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {term: ""};
  }

  onClick(event){
    var currentState = this.props.resultlist;
    var lastId = currentState[currentState.length -1].id;
    currentState.push({
          id: lastId++,
          name: document.getElementById('username').value,
          comment: document.getElementById('comment').value,
          image: 'http://d2rfsfyh2505gh.cloudfront.net/wp-content/uploads/2014/08/Neha_Dhupia-compressed.jpg'

      });
    this.setState(currentState);

  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  render(){
    return (
      <div>
      <div className="row">
        <div className="col-md-1"><img src={this.props.resultlist[0].image} width="100%" /></div>
        <div className="col-md-2">
        <input id="username" placeholder="Enter Name" value={this.state.term} onChange={this.onInputChange}/>
        <input id="comment" placeholder="Enter Comment" value={this.state.term} onChange={this.onInputChange}/>
        <button onClick={this.onClick}>Comment</button>
        </div>
      </div>
      </div>
    );
  }
}

export default Comment;
