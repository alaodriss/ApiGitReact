import React, { Component } from 'react'

import axios from "axios";
import User from './User'

class UserItem extends Component {

    state = {
     user : {}
    }

    componentDidMount(){
        const login =   this.props.match.params.login;
        
        axios.get(`https://api.github.com/users/${login}`)
        
        .then((response) => {
            this.setState({
              users: response.data  
            });
          });

       console.log('-----------')
        console.log(login)
        console.log('-----------')
    }
  render() {

 const {user} = this.state
    return (
      <div>

        <User user={user}/>
      </div>
    )
  }
}

export default UserItem