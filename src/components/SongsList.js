import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongsList extends Component {

  renderList() {
    return this.props.songs.map((song) => { /*Get props*/
      return (
        <div key={song.title}>
          <div>{song.title}</div>
          <button onClick={() => this.props.selectSong(song)}>Select</button> {/*Get props*/}
        </div>
      )
    })
  }

  render() {
    return <div>{this.renderList()}</div>
  }

}

const mapStateToProps = state => {
  return {
    songs: state.songs
  }
}

//Use connect method to pass props and action to component
export default connect(mapStateToProps, {
  selectSong
})(SongsList);
