import React, {Component} from 'react';
import ResultList from './result_list';
import Comment from './comment';

class CommentList extends Component {

  constructor(props){
    super(props);
    //this.state = this.props;
  }

render() {
  return (
    <div>
        <ResultList  results={this.props.results}  />
        <Comment resultlist={this.props.results}  />
    </div>
  );
}
}

export default CommentList;
