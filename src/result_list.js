import React, {Component} from 'react';
import ResultItem from './result_item';

class ResultList extends Component{

  constructor(props){
    super(props);
  }

  render(){
    const results = this.props.results.map((result) => {
      return(
        <ResultItem name={result.name}
        comment={result.comment}
        key={result.id}
        image={result.image}
        likes={result.likes} />
      )
    });

    return(
      <div> {results} </div>
    );
  }

}

export default ResultList;
