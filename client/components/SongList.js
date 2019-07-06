import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router";

class SongList extends Component {
  renderSongs() {
    if (this.props.data.loading) return <div>Loading...</div>;
    const {
      data: { songs }
    } = this.props;
    return (
      <ul className="collection">
        {songs.map(song => (
          <li className="collection-item" key={song.id}>
            {song.title}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    console.log(this.props);
    return (
      <div>
        { this.renderSongs() }
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;
export default graphql(query)(SongList);
