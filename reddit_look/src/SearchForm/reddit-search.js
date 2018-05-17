import './search-form.css'
import React, { Component } from 'react'
import superagent from 'superagent'

class RedditSearch extends Component {
    constructor (props) {
      super(props)
      this.state = {
        searchFormBoard: '',
        searchFormLimit: 10,
        borderClass: 'success'
      }
  
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.setState = this.setState.bind(this)
    
  }

  handleSubmit(e) {
    e.preventDefault()
    
    superagent.get(`https://www.reddit.com/r/${this.state.searchFormBoard}.json?limit=${this.state.searchFormLimit}`)
        .then(res => {
           
            this.props.setAppState({topics: res.body.data.children})
        })
        .catch(console.error)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render () {
    return (
      <div className='reddit-search'>
        <form onSubmit={this.handleSubmit} className={this.state.borderClass}>
          <input
            type='text'
            name='searchFormBoard'
            value={this.state.searchFormBoard}
            onChange={this.handleChange} />
          <input
            type='number'
            name='searchFormLimit'
            value={this.state.searchFormLimit}
            onChange={this.handleChange} />

          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

export default RedditSearch