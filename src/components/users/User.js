import React, { Component } from "react";

class User extends Component {
  render() {
      
    const {currentuser} = this.props
    
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={currentuser.avatar_url} alt="" />
          <div className="card-body">
            <h4 className="card-title">{currentuser.login}</h4>
            <p className="card-text">
              <a href={currentuser.html_url} className="btn btn-success" >
                Show more
              </a>
              <a href={currentuser.repos_url} className="btn btn-warning">
                {" "}
                Repositores
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
