import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

// Component Imports
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCu4A5rh42RxRXCgjen4L0hAEjvmM-l5Qo';



class App extends Component{
  constructor(props){
    super(props)

    this.state = { videos:[] };

    YTSearch({key:API_KEY, term:'surfboards'}, videos=> this.setState({videos}))
  }
  render(){
    return(
      <div>
        <SearchBar />
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.querySelector('.container'));
