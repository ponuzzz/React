import React, { Component } from 'react'

export default class State extends Component {
    //initialize state
    constructor(){
        super();
        this.State = {count:0};
    }
    increment = ()=>{
        this.setState({count: this.state.count + 1});
    }
  render() {
    return (
      <div>
        <h2>{ this.state.count}</h2> <br />
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
