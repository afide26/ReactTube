import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

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

    this.state = {
      videos:[],
      selectedVideo: null
     };

     this.videoSearchTerm('Bruce Lee');

  }

  videoSearchTerm(term){
    YTSearch({key:API_KEY, term:term}, videos=> this.setState({
      videos:videos,
      selectedVideo: videos[0]
    }))
  }
  render(){
    const videoSearch = _.debounce((term)=>{this.videoSearchTerm(term)}, 300);
    return(
      <div>
        <ReactTube/>
        <SearchBar onSearchTermChange = {videoSearch} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect = {(selectedVideo)=>{this.setState({selectedVideo})}}
            videos={this.state.videos}/>
        </div>
        <Footer />
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.querySelector('.container-fluid'));
