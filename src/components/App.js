import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // need to initialize state Redux like
    this.state = {
      videos: [],
      currentVideo: null
    };
  }

  // move to reducer
  componentDidMount() {
    this.getYouTubeVideos('react tutorials');
  }

  // move to reducer
  handleVideoListEntryTitleClick(video) {
    this.setState({currentVideo: video});
  }

  // move to reducer
  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };
// maybe move to reducer
    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <Nav handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
        <div className="row">
          <div className="col-md-7">
          {/* use store to access state */}
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList
            // subscribe to handle event
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              /* use store to access state */
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}
