import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class SongList extends Component {
  renderSongs() {
    if (this.props.data.loading) return <div>Loading...</div>;
    const {
      data: { songs }
    } = this.props;
    return (
      <ul className="collection">
        {songs.map(song => (
          <li className="collection-item" key={song.id}>{song.title}</li> 
        ))}
      </ul>
    );
  }
  render() {
    console.log(this.props);
    return this.renderSongs();
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
