import React, { Component } from "react";

export class SerachBar extends Component {
  state = {
    serach: "",
  };

  change = (e) => {
    this.setState({
      serach: e.target.value,
    });
  };

  serachUser = (e) => {
    e.preventDefault();
    this.props.getUser(this.state.serach);
  };

  render() {
    const { serach } = this.state;

    console.log(serach);
    return (
      <form onSubmit={this.serachUser.bind(this)}>
        <div className="form-group">
          <label htmlFor="Serach"></label>
          <input
            type="text"
            name=""
            id="Serach"
            className="form-control"
            onChange={this.change.bind(this)}
            value={serach}
            placeholder="Serach user ..."
          />
          <button className="btn btn-primary btn-block"> Serach</button>
        </div>
      </form>
    );
  }
}

export default SerachBar;
