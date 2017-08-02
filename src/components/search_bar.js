import React, {Component} from 'react'


// define the search form component


export default class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term:''};
  }

  render(){
    return(
      <div>
        <input className="form-control"
               placeholder="Type your search here..."
               value={this.state.term}
               onChange={(event) => this.onInputChange(event.target.value)}
               ref="searchName"
        />
      </div>
    )
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
