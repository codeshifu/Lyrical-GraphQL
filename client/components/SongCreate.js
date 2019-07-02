import React, { Component } from "react";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h2>Create new song</h2>
        <form>
          <label htmlFor="title">Title</label>
          <input
            autoFocus
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            type="text"
            id="title"
          />
        </form>
      </div>
    );
  }
}

export default SongCreate;
