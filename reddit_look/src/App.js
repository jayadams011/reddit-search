import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import RedditData from './SearchResultList/reddit-data';
import RedditSearch from './SearchForm/reddit-search';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
    }
  }

  render() {
    return (
      <div className="App">
        
        <RedditSearch setAppState={this.setState.bind(this)}/>

        { this.state.topics.length > 0 ?
          <RedditData topics={this.state.topics} />
          :
          undefined
        }

      </div>
    )
  }
}

export default App


// if (condition) {
//   // do thing
// } else {
//   // do other thing
// }

// condition ? '//do thing' : '// do other thing'
