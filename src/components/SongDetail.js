import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({songDetail}) => { //Destructuring props
  if(!songDetail) {
    return <div>Select a song</div>
  }
  return (
    <div>
      <div>{songDetail.title}</div>
      <div>{songDetail.duration}</div>
    </div>
  )
};

// Get state as props
const mapStateToProps = state => {
  return {
    songDetail: state.selectedSong
  }
}

//Use connect method to pass props to component
export default connect(mapStateToProps)(SongDetail);
