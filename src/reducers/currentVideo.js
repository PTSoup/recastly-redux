import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.currentVideo;
    default:
      return state;
  }
};

export default currentVideoReducer;
