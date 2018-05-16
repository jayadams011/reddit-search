import React, { Component } from 'react'

 export default class RedditData extends Component {
  

  render() {
    return (
      <ul className="results">
      {
        this.props.topics.map((topic) => 
          <li key={topic.data.url.toString()}><a href={topic.url}>
          <h3>{topic.data.title}</h3>
          <p>{topic.data.ups}</p>
          </a></li>
          )
        }
      </ul>
        )
      }
}
