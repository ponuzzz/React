import React, { Component } from 'react'


export default class Props extends Component {



    render() {
       
        return (
            <div>

                <h2>Hello, {this.props.name}!</h2>
                <p>Your passion is {this.props.passion}.</p>
            </div>
        )
    }
}
