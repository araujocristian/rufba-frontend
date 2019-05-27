import React, { Component } from 'react'
import User from '../../users/api'

export class Home extends Component {
    state = {
        response: ''
      };
    
      componentDidMount() {
        User.getTest()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err, "ERRO"));
      }

    render() {
        return (
            <div>
                HOME

                {this.state.response}

            </div>
        )
    }
}

export default Home
