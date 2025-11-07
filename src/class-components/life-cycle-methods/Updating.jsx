import React, { Component } from 'react'

export default class Updating extends Component {
    constructor(props){
        super(props);
        this.state={count:0};
    }
    increment = () =>{
        this.setState({count: this.state.count+1});
    }
    componentDidUpdate(prevState){
        if(prevState.count !== this.state.count){
            console.log(`components updated,new count:` ,this.state.count);
            
        }
    }
  render() {
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
