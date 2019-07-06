import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";

import { fetchSongs } from "../queries";
import { addSong } from "../mutations";

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

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    this.props
      .mutate({
        variables: {
          title
        },
        refetchQueries: [{ query: fetchSongs }]
      })
      .then(() => {
        hashHistory.push("/");
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h2>Create new song</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
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

export default graphql(addSong)(SongCreate);
