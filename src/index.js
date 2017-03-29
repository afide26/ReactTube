import React from 'react'
import ReactDOM from 'react-dom'


// Component Imports
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCu4A5rh42RxRXCgjen4L0hAEjvmM-l5Qo';

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('.container'));
