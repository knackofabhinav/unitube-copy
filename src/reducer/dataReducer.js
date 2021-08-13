export const reduce = (state, action) => {
  switch (action.type) {
    case "ADD_VIDEO_LIST_FROM_SERVER":
      return {
        ...state,
        videoListing: action.payload,
      };
    case "LOGGED_IN":
      return {
        ...state,
        liked: action.payload.likedVideos,
        history: action.payload.history,
        playlists: action.payload.playlists,
        watchLater: action.payload.watchLater,
        userId: action.payload._id,
      };
    case "UPDATE_LIKED":
      return {
        ...state,
        liked: action.payload,
      };
    case "UPDATE_HISTORY":
      return {
        ...state,
        history: action.payload,
      };
    case "UPDATE_WATCHLATER":
      return {
        ...state,
        watchLater: action.payload,
      };
    case "UPDATE_PLAYLISTS":
      return {
        ...state,
        playlists: action.payload,
      };
    case "ADD_TO_VIDEO_PAGE":
      return {
        ...state,
        videoPage: action.payload,
      };
    case "LOAD_THIS_PLAYLIST":
      return {
        ...state,
        loadThisPlaylist: action.payload.item,
      };
    case "UPDATE_CURRENT_PLAYLIST":
      return { ...state, loadThisPlaylist: action.payload };
    default:
      break;
  }
  return state;
};
