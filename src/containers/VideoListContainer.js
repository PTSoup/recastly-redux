import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const mapStateToProps = state => {
  return {
    videos: state.videoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)),
  };
};

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
