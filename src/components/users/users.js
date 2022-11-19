import React, { Component } from "react";

import SerachBar from "../partials/SerachBar";

import axios from "axios";
import User from "./User";

 class users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  getUsers = () => {
    axios.get(`https://api.github.com/users`).then((response) => {
      this.setState({
        users: response.data,
      });
    });
  };

  componentDidMount() {
    this.getUsers();
  }

  serachForGit = (data)=> {

    if(data !== ''){
        axios.get(`https://api.github.com/search/users?q=${data}`).then(response =>{
          this.setState({
            users: response.data.items
          });
        }
        )
    }


  }

  render() {
    return (
      <div>
        <div className="row my-2">
          <div className="col-md-12">
            <SerachBar getUser={this.serachForGit} />
          </div>
        </div>

        <div className="row">
          {this.state.users.map((user) => (
            <div className="col-md-4" key={user.id}>
              <User currentuser={user} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default users;
