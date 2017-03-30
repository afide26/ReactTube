import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

// Component Imports
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import ReactTube from './components/logo'
import Footer from './components/footer'
import API_KEY from './api.js'




class App extends Component{
  constructor(props){
    super(props)

    this.state = { videos:[] };

    YTSearch({key:API_KEY, term:'ufc'}, videos=> this.setState({videos}))
  }
  render(){
    return(
      <div>
        <ReactTube/>
        <SearchBar />
        <div className="row">
          <VideoDetail video={this.state.videos[0]}/>
          <VideoList videos={this.state.videos}/>
        </div>
        <Footer />
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.querySelector('.container-fluid'));
