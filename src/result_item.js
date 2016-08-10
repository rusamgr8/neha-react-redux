import React, {Component} from 'react';

class ResultItem extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div  id={this.props.key} className="row">
          <div className="col-md-1"><img src={this.props.image} width="100%" /></div>
          <div className="col-md-2"><h5> {this.props.name} </h5>
          <p> {this.props.comment} </p></div>
        </div>
        <br />
      </div>
    );
  }
}

export default ResultItem;
