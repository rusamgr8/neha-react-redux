import React, {Component} from 'react';

class Likes extends Component{

  constructor(props){
    super(props);
  }

render() {
  return(
    <div>
      <div className="row">
        <div className="col-lg-4">
          <img src="http://soundsenglish.com/wp-content/uploads/2016/03/like.png" style={{width: '100%'}} />
        </div>
        <div>
          <p> {this.props.likes}</p>
        </div>
      </div>
    </div>

  );
}

}

export default Likes
